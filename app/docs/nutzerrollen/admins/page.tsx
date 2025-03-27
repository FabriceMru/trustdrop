'use client';

import TrustDropHighlight from '@/components/TrustDropHighlight';
import Link from 'next/link';

export default function AdminsPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">🔧 Admins</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        Admins verwalten und konfigurieren <TrustDropHighlight /> – sie sind für die technische Infrastruktur, das Schlüsselsystem sowie die Sicherheitsrichtlinien zuständig.
                        Sie haben keinen Zugriff auf entschlüsselte Nachrichten, können jedoch alles rund um die Plattform einrichten.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Typische Admin-Aufgaben</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Initiale Einrichtung der Plattform und Schlüsselverwaltung.</li>
                        <li>Upload & Rotation des Public Keys.</li>
                        <li>Rollenzuweisung und Zugriffsrechte für Empfänger:innen.</li>
                        <li>Konfiguration von Datenschutzhinweisen, Sprache & Design.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Abgrenzung zu Empfängern</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Admins sehen keine Inhalte – sie haben keinen Zugriff auf entschlüsselte Nachrichten.</li>
                        <li>Empfänger:innen arbeiten mit sensiblen Inhalten, Admins mit Struktur & Technik.</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zu <Link href="/docs/nutzerrollen" className="underline text-emerald-400">allen Nutzerrollen</Link>
                </p>
            </div>
        </main>
    );
}
