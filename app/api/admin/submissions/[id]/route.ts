import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function DELETE(
    request: NextRequest,
    context: { params: { id: string } }
): Promise<NextResponse> {
    const { id } = context.params;
    const filePath: string = path.join(process.cwd(), 'storage', 'submissions.json');

    try {
        const fileData: string = await fs.readFile(filePath, 'utf-8');
        const submissions: any[] = JSON.parse(fileData);
        const updated: any[] = submissions.filter((s: any) => s.id !== id);

        await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Fehler beim Löschen:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
