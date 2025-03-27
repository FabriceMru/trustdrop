import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const filePath = path.join(process.cwd(), 'storage', 'submissions.json');

    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const submissions = JSON.parse(fileData);
        const updated = submissions.filter((s: any) => s.id !== params.id);

        await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Fehler beim Löschen:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
