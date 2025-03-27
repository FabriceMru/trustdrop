import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { organization, subject, location, email, message } = data;

        if (!organization || !subject || !email) {
            return NextResponse.json(
                { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
                { status: 400 }
            );
        }

        // 🧪 Debugging-Ausgabe
        console.log('📩 Neue Kontaktanfrage erhalten:', data);

        // TODO: Hier kannst du z. B. E-Mail-Versand, Datenbank-Speicherung etc. einfügen

        return NextResponse.json(
            { success: true, message: 'Anfrage erfolgreich übermittelt.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ Fehler beim Verarbeiten der Kontaktanfrage:', error);
        return NextResponse.json(
            { error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.' },
            { status: 500 }
        );
    }
}
