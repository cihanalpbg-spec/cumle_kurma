export default async function handler(req, res) {
  // Get query word and optional client-side API key
  const word = req.query.word;
  const clientKey = req.query.key;
  
  // Resolve API Key: environment variable takes priority, fallback to client-supplied key
  const apiKey = process.env.GEMINI_API_KEY || clientKey;
  
  // Set CORS headers early
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (!word) {
    return res.status(400).json({ error: 'Word parameter is required' });
  }

  if (!apiKey) {
    return res.status(401).json({ 
      error: 'API Key missing',
      needKey: true,
      message: 'Gemini API Anahtarı bulunamadı. Lütfen ayarlardan bir API anahtarı girin veya Vercel panelinden GEMINI_API_KEY çevre değişkenini tanımlayın.' 
    });
  }

  // Create prompt to force Gemini to build graded sentences with Turkish translation and analysis
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
      const errorText = await response.text();
      console.error("Gemini API direct error response:", errorText);
      throw new Error(`Gemini API returned status: ${response.status}. Key might be invalid.`);
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    
    // Parse the generated text to make sure it's valid JSON before returning
    const parsedData = JSON.parse(rawText.trim());
    
    // Return to client
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=1800'); // Cache for 1 hour
    return res.status(200).json(parsedData);
  } catch (error) {
    console.error("Serverless Gemini generator error:", error);
    return res.status(500).json({ error: error.message });
  }
}
