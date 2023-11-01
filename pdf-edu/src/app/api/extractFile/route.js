import { parse } from 'pdf-parse';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const file = req.files.pdf.data;
  const data = await parse(file);

  res.status(200).json({ text: data.text });
}