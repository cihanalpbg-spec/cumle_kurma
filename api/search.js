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
The student wants to learn about the word "${word}".

First, determine if "${word}" is a Turkish word or an English word.

--- CASE 1: The input is a TURKISH word (e.g., "kalmak", "ayırmak", "almak") ---
If the word is Turkish, set "isTurkishInput" to true in your response.
A Turkish word can have multiple distinct meanings/usages in English depending on context.
Identify the main semantic usages (usually 2 to 4 key usages).
For example:
- "kalmak":
  - Usage 1: stay / remain (Bir yerde kalmak / konaklamak) -> 5 sentences.
  - Usage 2: fail (Sınavda/Sınıfta kalmak) -> 5 sentences.
  - Usage 3: linger / persist (Akılda kalmak / kalıcı olmak) -> 3 sentences.
- "ayırmak":
  - Usage 1: separate / divide / split (Fiziksel olarak bölmek/ayırmak) -> 5 sentences.
  - Usage 2: distinguish / differentiate (Fikirsel/Zihinsel olarak ayırt etmek) -> 5 sentences.
  - Usage 3: reserve / set aside (Başka kullanım amacı: yer ayırtmak, para ayırmak vb.) -> 5 sentences.

For each identified usage of the Turkish word, provide:
- "englishWord": The primary English translation word(s) representing this usage (e.g. "stay / remain").
- "contextName": Brief Turkish description of this usage context (e.g. "Bir yerde kalmak / konaklamak").
- "sentences": A list of example sentences illustrating this usage.
  - For major usages, generate exactly 5 sentences.
  - For minor or abstract usages, generate exactly 3 sentences.
  - Mix English levels (Simple, Medium, Academic) naturally across these sentences.
  - For each sentence, provide:
    - "eng": The English sentence.
    - "tr": The Turkish translation.
    - "analysis": Brief grammar breakdown in Turkish.
    - "vocabulary": List of key words/phrasal verbs used in this sentence: [{"phrase": "word or phrasal verb", "tr": "Türkçe anlamı"}].

--- CASE 2: The input is an ENGLISH word (e.g., "anticipate", "arrival", "emergence") ---
If the word is English, set "isTurkishInput" to false in your response.
Generate:
- "wordInfo": {
    "word": "${word}",
    "pos": "part of speech (noun, verb, adjective, etc.)",
    "phonetics": "IPA pronunciation (e.g., /æn'tɪs.ɪ.peɪt/)",
    "trPronunciation": "Approximation of how to pronounce it in Turkish spelling (e.g., en-ti-si-peyt)",
    "trMeaning": "Direct Turkish translation/meanings of the word",
    "usageDifference": "A detailed explanation in Turkish about the usage context, nuances, and how it differs from close synonyms or commonly confused words (e.g., explaining arrival vs advent)."
  }
- "simple": Exactly 7 sentences (A1-A2 level) containing "${word}". Each with "eng", "tr", "analysis", and "vocabulary" array.
- "medium": Exactly 7 sentences (B1-B2 level) containing "${word}". Each with "eng", "tr", "analysis", and "vocabulary" array.
- "academic": Exactly 7 sentences (C1-C2 level) containing "${word}". Each with "eng", "tr", "analysis", and "vocabulary" array.

Output MUST be a raw JSON object matching the corresponding case schema. Do not write markdown block. Return only the raw JSON.`;

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
