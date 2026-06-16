import axios from 'axios';

export const analyzeStartupIdea = async (idea) => {

  const prompt = `You are a world-class startup analyst. Analyze this startup idea and respond ONLY with valid JSON. No markdown, no backticks, no explanation, no text before or after. Just raw JSON.

Idea: "${idea}"

Carefully evaluate the idea and generate a UNIQUE score based on actual merit. Do NOT copy example numbers.

Rules for scoring:
- marketSize: how large is the addressable market? (0-100)
- uniqueness: how differentiated is this from existing solutions? (0-100)
- feasibility: how technically and operationally feasible? (0-100)
- monetization: how clear and viable is the revenue model? (0-100)
- timing: is the market ready for this now? (0-100)
- score: weighted average of the above five (0-100)

Think carefully — every idea must get a different score based on its actual strengths and weaknesses.

Return ONLY this JSON with no other text:
{
  "problemStatement": "2-3 sentences describing the core problem this solves",
  "targetAudience": "2-3 sentences describing exactly who this is for",
  "marketOpportunity": "2-3 sentences about market size and growth potential",
  "competitors": ["Real competitor 1", "Real competitor 2", "Real competitor 3"],
  "risks": ["Specific risk 1", "Specific risk 2", "Specific risk 3"],
  "revenueModel": "2-3 sentences about how this generates revenue",
  "mvpRoadmap": ["Step 1: specific action", "Step 2: specific action", "Step 3: specific action"],
  "score": 0,
  "scoreBreakdown": {
    "marketSize": 0,
    "uniqueness": 0,
    "feasibility": 0,
    "monetization": 0,
    "timing": 0
  }
}`;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.groq.com/openai/v1/chat/completions',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'You are a startup analyst. You respond ONLY with valid raw JSON. Never use markdown or backticks. Always calculate unique scores based on the specific idea provided.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.9,
        max_tokens: 1500
      }
    });

    const raw = response.data.choices[0].message.content;
    console.log('🤖 Raw Groq response:', raw);

    const cleaned = raw
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    return JSON.parse(cleaned);

  } catch (err) {
    console.error('Groq error details:', err.response?.data || err.message);
    throw err;
  }
};