'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function VorteilePage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">✨ Warum <TrustDropHighlight />?</h1>

                {/* Einleitung */}
                <section className="mb-10">
                    <p className="text-gray-300">
                        <TrustDropHighlight /> wurde entwickelt, um Sicherheitslücken konventioneller Hinweisgebersysteme zu schließen.
                        Im Fokus stehen Datenschutz, Nutzerfreundlichkeit und volle technische Kontrolle.
                        Hier sind die wichtigsten Vorteile auf einen Blick:
                    </p>
                </section>

                {/* Vorteile für Hinweisgeber:innen */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🕵️ Für Hinweisgeber:innen</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>100 % Anonymität – keine IPs, keine Cookies, keine Tracker.</li>
                        <li>Verschlüsselung direkt im Browser – niemand kann mitlesen.</li>
                        <li>Kein Account oder Login notwendig.</li>
                        <li>Benutzerfreundliche Oberfläche – ohne technische Hürden.</li>
                        <li>Dateiupload möglich – Beweise können sicher mitgeschickt werden.</li>
                    </ul>
                </section>

                {/* Vorteile für Empfänger:innen */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">📥 Für Empfänger:innen</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Ende-zu-Ende-Verschlüsselung garantiert, dass nur berechtigte Personen lesen können.</li>
                        <li>Nachrichtenverarbeitung komplett lokal – Private Keys bleiben im Besitz der Organisation.</li>
                        <li>Digitale Signaturen ermöglichen Verifikation der Integrität von Dateien.</li>
                        <li>Verlässliche, strukturierte Hinweisbearbeitung mit integrierter Verwaltung.</li>
                    </ul>
                </section>

                {/* Vorteile für Admins / Organisationen */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🔧 Für Organisationen & Admins</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Selbst gehostet oder als SaaS – volle Kontrolle über Infrastruktur & Sicherheit.</li>
                        <li>Open Source – vollständig auditierbar & erweiterbar.</li>
                        <li>Kein Vendor Lock-in, keine proprietären Formate.</li>
                        <li>Kann an Compliance-Standards wie EU-DSGVO und das Hinweisgeberschutzgesetz angepasst werden.</li>
                        <li>Skalierbar für NGOs, Medienhäuser, Behörden und Unternehmen jeder Größe.</li>
                    </ul>
                </section>

                {/* Link */}
                <p className="text-sm text-gray-400 mt-6">
                    Erfahre als Nächstes <Link href="/docs/wie-es-funktioniert" className="underline text-emerald-400">wie TrustDrop funktioniert</Link>.
                </p>
            </div>
        </main>
    );
}
