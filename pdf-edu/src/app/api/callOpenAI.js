import axios from 'axios';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const prompt = req.body.prompt;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: prompt,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return res.json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json(error.response?.data || {});
  }
};