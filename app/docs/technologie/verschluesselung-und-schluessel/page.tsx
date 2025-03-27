'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function VerschluesselungPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">🔐 Verschlüsselung & Schlüsselmanagement</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        <TrustDropHighlight /> basiert auf asymmetrischer Verschlüsselung mit OpenPGP. Jede Nachricht wird im Browser der Hinweisgeber:in mit dem <strong>öffentlichen Schlüssel</strong> des Empfängers verschlüsselt.
                        Nur mit dem passenden <strong>privaten Schlüssel</strong> kann die Nachricht wieder entschlüsselt werden.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🗝️ Wie funktioniert das in TrustDrop?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Beim Nachrichtensenden wird automatisch der öffentliche Schlüssel verwendet, um alle Daten zu verschlüsseln.</li>
                        <li>Im Admin-Bereich wird der private Schlüssel lokal importiert – niemals gespeichert.</li>
                        <li>Optional: Der Schlüsselimport kann zusätzlich mit einem Passwort gesichert werden.</li>
                        <li>Verwendet wird der OpenPGP-Standard – kompatibel mit GPG & anderen Tools.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🧠 Vorteile dieses Ansatzes</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Absolute Kontrolle über die Entschlüsselung.</li>
                        <li>Keine vertraulichen Inhalte auf dem Server.</li>
                        <li>Integration in bestehende Schlüsselinfrastrukturen möglich.</li>
                        <li>Nachvollziehbar, erweiterbar, auditierbar.</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zu <Link href="/docs" className="underline text-emerald-400">Hauptdokumentation</Link>
                </p>
            </div>
        </main>
    );
}
