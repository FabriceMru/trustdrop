'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function MetadatenPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">🕵️ Keine Metadaten – keine Rückverfolgung</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        Viele Plattformen speichern unsichtbare Informationen, sogenannte Metadaten – z. B. IP-Adressen, Zeitstempel oder Browserinformationen. <TrustDropHighlight /> verzichtet konsequent auf all das.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Welche Daten speichert TrustDrop NICHT?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Keine IP-Adressen oder Geo-Daten</li>
                        <li>Keine Session-IDs oder Fingerprints</li>
                        <li>Keine Cookies, LocalStorage oder Tracking-Daten</li>
                        <li>Keine Referrer-Header oder externe Fonts/Skripte</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Was bedeutet das für die Anonymität?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Hinweise sind technisch nicht rückverfolgbar.</li>
                        <li>Es gibt keine Verbindung zwischen Nachrichten und Geräten/IPs.</li>
                        <li>Selbst bei Datenlecks wären keine Nutzeridentitäten betroffen.</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zu <Link href="/docs/datenschutz/grundlagen" className="underline text-emerald-400">Datenschutz-Grundlagen</Link>
                </p>
            </div>
        </main>
    );
}
