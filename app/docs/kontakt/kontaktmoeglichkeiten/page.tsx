'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function KontaktMoeglichkeitenPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">📬 Kontaktmöglichkeiten</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        Du möchtest mit dem <TrustDropHighlight />-Team in Kontakt treten, Feedback geben oder Fragen stellen?
                        Hier findest du verschiedene Wege, uns sicher zu erreichen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🔐 Sichere Kontaktwege</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>E-Mail (PGP empfohlen): <code className="text-emerald-400">kontakt@trustdrop.io</code></li>
                        <li>ProtonMail: <code className="text-emerald-400">trustdrop@protonmail.com</code></li>
                        <li>Matrix: <code className="text-emerald-400">@trustdrop:matrix.org</code></li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🤝 Community & Mitwirken</h2>
                    <p className="text-gray-300 mb-4">
                        Du möchtest dich aktiv einbringen, das Projekt unterstützen oder mitentwickeln?
                        Wir freuen uns über Beiträge auf GitHub, Ideen oder Support in der Community.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>GitHub: <a href="https://github.com/dein-org/trustdrop" target="_blank" className="text-emerald-400 underline">github.com/dein-org/trustdrop</a></li>
                        <li>Fragen & Diskussionen gern per Matrix oder E-Mail</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zur <Link href="/docs" className="underline text-emerald-400">Hauptdokumentation</Link>
                </p>
            </div>
        </main>
    );
}
