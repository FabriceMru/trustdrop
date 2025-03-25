export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import path from 'path';
import crypto from 'crypto';
import { ensureDir, readJsonArray, writeJsonArray } from '@/lib/utils/storage';


// Wichtig: als Konstante exportieren
export const POST = async (req: Request) => {
    try {
        const { encryptedMessage, encryptedFile } = await req.json();

        if (!encryptedMessage) {
            return NextResponse.json({ success: false, error: 'Fehlender verschlüsselter Inhalt' }, { status: 400 });
        }

        const id = crypto.randomUUID();
        const submission = {
            id,
            encryptedMessage,
            encryptedFile: encryptedFile || null,
            date: new Date().toISOString(),
            read: false,
        };

        const storageDir = path.join(process.cwd(), 'storage');
        const submissionsFile = path.join(storageDir, 'submissions.json');

        await ensureDir(storageDir);
        const submissions = await readJsonArray(submissionsFile);
        submissions.unshift(submission);
        await writeJsonArray(submissionsFile, submissions);

        return NextResponse.json({ success: true, id });
    } catch (error) {
        console.error('❌ Fehler beim Speichern:', error);
        return NextResponse.json(
            { success: false, error: 'Interner Fehler beim Speichern' },
            { status: 500 }
        );
    }
};
