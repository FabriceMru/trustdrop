import { NextResponse } from 'next/server';
import { getAllSubmissions } from '@/lib/utils';

export async function GET() {
    try {
        const submissions = await getAllSubmissions();
        return NextResponse.json({ submissions });
    } catch (error) {
        console.error('Load Submissions Error:', error);
        return NextResponse.json({ error: 'Failed to load submissions' }, { status: 500 });
    }
}
