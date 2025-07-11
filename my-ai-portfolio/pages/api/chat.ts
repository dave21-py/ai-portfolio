// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { text?: string; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  try {
    const hfRes = await fetch(
      'https://api-inference.huggingface.co/models/gpt2',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: prompt, options: { wait_for_model: true } }),
      }
    );

    if (!hfRes.ok) {
      const err = await hfRes.text();
      return res.status(hfRes.status).json({ error: err });
    }

    const data = await hfRes.json();
    const text = Array.isArray(data) ? data[0]?.generated_text : data.generated_text;
    return res.status(200).json({ text });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
