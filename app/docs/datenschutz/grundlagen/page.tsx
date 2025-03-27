'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function DatenschutzGrundlagenPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">📜 Datenschutz & DSGVO-Konformität</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        <TrustDropHighlight /> wurde von Grund auf so konzipiert, dass keine personenbezogenen Daten gespeichert oder verarbeitet werden. Die gesamte Plattform ist darauf ausgelegt, DSGVO-konform einsetzbar zu sein – sowohl im SaaS-Modell als auch bei Selbsthosting.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Was bedeutet das konkret?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Keine Speicherung von IP-Adressen oder Nutzeridentitäten.</li>
                        <li>Keine Cookies, keine Tracker, keine Drittanbieter-Skripte.</li>
                        <li>Browserseitige Verschlüsselung – keine unverschlüsselten Daten auf dem Server.</li>
                        <li>Optional: Eigene Datenschutzerklärung beim Selbsthosting integrierbar.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">DSGVO-Grundlagen erfüllt:</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li><strong>Datenminimierung</strong> – nur das, was Nutzer:innen freiwillig übermitteln.</li>
                        <li><strong>Transparenz</strong> – Open Source: Quellcode ist vollständig einsehbar.</li>
                        <li><strong>Speicherbegrenzung</strong> – temporäre Speicherung, keine Langzeit-Logs.</li>
                        <li><strong>Integrität & Vertraulichkeit</strong> – durch starke Verschlüsselung & lokale Entschlüsselung.</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Weitere Infos zu <Link href="/docs/datenschutz/metadaten" className="underline text-emerald-400">Metadaten & Rückverfolgbarkeit</Link>
                </p>
            </div>
        </main>
    );
}
