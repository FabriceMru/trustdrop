import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { formatDate } from '@/lib/utils'; // NEU – zukunftssicher

export async function POST(req: Request) {
  try {
    const { encryptedMessage, encryptedFile } = await req.json();
    const id = crypto.randomUUID();

    const submission = {
      id,
      encryptedMessage,
      encryptedFile: encryptedFile || null,
      date: new Date().toISOString(), // oder: formatDate(new Date())
      read: false,
    };

    const storageDir = path.join(process.cwd(), 'storage');
    const submissionsFile = path.join(storageDir, 'submissions.json');

    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    let submissions: any[] = [];
    if (fs.existsSync(submissionsFile)) {
      const fileContent = fs.readFileSync(submissionsFile, 'utf8');
      submissions = JSON.parse(fileContent);
    }

    submissions.unshift(submission);
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), 'utf8');

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Fehler beim Speichern der Nachricht:', error);
    return NextResponse.json(
        { success: false, error: 'Interner Fehler beim Speichern' },
        { status: 500 }
    );
  }
}
