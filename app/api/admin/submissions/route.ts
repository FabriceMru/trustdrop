import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'storage', 'submissions.json');

    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const submissions = JSON.parse(fileData);

        return NextResponse.json({ submissions });
    } catch (error) {
        console.error('Fehler beim Laden der Einreichungen:', error);
        return NextResponse.json({ submissions: [] });
    }
}
