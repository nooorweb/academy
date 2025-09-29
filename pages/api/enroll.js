export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, phone, courseId } = req.body || {};
    if (!name || !email || !phone || !courseId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // For now, just echo back; can be replaced with DB/storage later
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Internal error' });
  }
}


