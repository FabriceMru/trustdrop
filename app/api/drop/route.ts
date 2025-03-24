import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: Request) {
    const { encryptedMessage, encryptedFile } = await req.json();
    const id = crypto.randomUUID();
    const filePath = path.join(process.cwd(), 'storage', `${id}.json`);

    // Ensure storage directory exists
    const storageDir = path.join(process.cwd(), 'storage');
    if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify({ encryptedMessage, encryptedFile }), 'utf8');

    return NextResponse.json({ success: true, id });
}