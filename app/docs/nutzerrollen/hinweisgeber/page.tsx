'use client';

import TrustDropHighlight from '@/components/TrustDropHighlight';
import Link from 'next/link';

export default function HinweisgeberPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">🕵️ Hinweisgeber</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        Hinweisgeber:innen spielen eine zentrale Rolle in <TrustDropHighlight />. Sie sind die Personen, die vertrauliche Informationen, Missstände oder Beobachtungen sicher und anonym übermitteln möchten – ohne dabei ihre Identität preiszugeben.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Was können Hinweisgeber tun?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Sichere, verschlüsselte Nachricht übermitteln – ganz ohne Registrierung.</li>
                        <li>Dateien und Beweismaterial anonym anhängen.</li>
                        <li>Auf Wunsch einen Betreff oder Kontext mitgeben.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Wie werden sie geschützt?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Keine IP-Adressen, keine Cookies, keine Tracker.</li>
                        <li>Alles wird Ende-zu-Ende verschlüsselt – bereits im Browser.</li>
                        <li>Die Identität bleibt technisch und rechtlich geschützt.</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zu <Link href="/docs/nutzerrollen" className="underline text-emerald-400">allen Nutzerrollen</Link>
                </p>
            </div>
        </main>
    );
}
