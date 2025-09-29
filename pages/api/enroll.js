import fs from 'fs';
import path from 'path';

const enrollmentsFile = path.join(process.cwd(), 'data', 'enrollments.json');

function readEnrollments() {
  try {
    const raw = fs.readFileSync(enrollmentsFile, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeEnrollments(list) {
  fs.mkdirSync(path.dirname(enrollmentsFile), { recursive: true });
  fs.writeFileSync(enrollmentsFile, JSON.stringify(list, null, 2), 'utf-8');
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const list = readEnrollments();
    return res.status(200).json(list);
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, phone, courseId } = req.body || {};
    if (!name || !email || !phone || !courseId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const list = readEnrollments();
    const record = {
      id: `${Date.now()}`,
      name,
      email,
      phone,
      courseId,
      createdAt: new Date().toISOString(),
    };
    list.push(record);
    writeEnrollments(list);
    return res.status(200).json({ ok: true, id: record.id });
  } catch (e) {
    return res.status(500).json({ error: 'Internal error' });
  }
}


