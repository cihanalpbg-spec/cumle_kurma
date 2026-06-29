import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file variables if it exists
if (fs.existsSync(path.join(__dirname, '.env'))) {
  const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const parts = trimmed.split('=');
    const key = parts[0]?.trim();
    const value = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, ''); // strip optional quotes
    if (key && value) {
      process.env[key] = value;
      console.log(`Loaded environment variable: ${key}`);
    }
  });
}

const PORT = 8000;

// MIME types for static files
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  
  // API Route: /api/search (Gemini Sentence Builder)
  if (pathname === '/api/search') {
    const word = parsedUrl.searchParams.get('word');
    const clientKey = parsedUrl.searchParams.get('key');
    const apiKey = process.env.GEMINI_API_KEY || clientKey;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (!word) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Word parameter is required' }));
      return;
    }

    if (!apiKey) {
      res.writeHead(401);
      res.end(JSON.stringify({ 
        error: 'API Key missing',
        needKey: true,
        message: 'Gemini API Anahtarı bulunamadı. Lütfen ayarlardan bir API anahtarı girin veya .env dosyasına GEMINI_API_KEY tanımlayın.' 
      }));
      return;
    }

    const prompt = `You are an expert English language teacher and curriculum developer.
The student wants to learn the English word "${word}".
Generate exactly 3 sentences for each level of proficiency:
1. "simple" (A1-A2 level: simple vocabulary, short sentences).
2. "medium" (B1-B2 level: coordinate/subordinate clauses, intermediate vocabulary).
3. "academic" (C1-C2 level: complex sentence structures, advanced grammar like passive voice, relative clauses, subjunctive, and academic vocabulary/conjunctions).

Each sentence must contain the target word "${word}" (or its inflected forms like plural/tense change if natural, but keep the word highlighted).
For the "academic" sentences, please make sure the sentence is truly academic, formal, and complex, demonstrating advanced syntactic structures (e.g. inversion, nominal clauses, participle clauses) and academic context (e.g., research, analysis, literature).

For each sentence, provide:
1. "eng": The English sentence.
2. "tr": The Turkish translation.
3. "analysis": A very brief grammatical breakdown in Turkish showing the key structures (e.g. "Relative clause (which) ve edilgen yapı kullanılmıştır").

Output MUST be a raw JSON object matching this schema:
{
  "simple": [{"eng": "...", "tr": "...", "analysis": "..."}],
  "medium": [{"eng": "...", "tr": "...", "analysis": "..."}],
  "academic": [{"eng": "...", "tr": "...", "analysis": "..."}]
}
Do not write markdown block. Return only the raw JSON.`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Gemini direct error response:", errText);
        throw new Error(`Gemini API returned status: ${response.status}`);
      }

      const data = await response.json();
      const rawText = data.candidates[0].content.parts[0].text;
      
      const parsedData = JSON.parse(rawText.trim());
      
      res.writeHead(200);
      res.end(JSON.stringify(parsedData));
    } catch (error) {
      console.error("Local API Proxy Gemini Error:", error);
      res.writeHead(500);
      res.end(JSON.stringify({ error: error.message }));
    }
    return;
  }
  
  // Static Files Route
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  
  // Prevent directory traversal attacks
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Denied');
    return;
  }
  
  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Add caching rules for PWA files
      const headers = { 'Content-Type': contentType };
      if (pathname === '/sw.js' || pathname === '/manifest.json') {
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      }
      res.writeHead(200, headers);
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Cümle Bulucu Yerel Geliştirme Sunucusu Başlatıldı!`);
  console.log(`👉 Adres: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
