'use client';

import TrustDropHighlight from '@/components/TrustDropHighlight';
import Link from 'next/link';

export default function EmpfaengerPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">📥 Empfänger</h1>

                <section className="mb-10">
                    <p className="text-gray-300">
                        Empfänger:innen sind autorisierte Personen innerhalb einer Organisation, die eingehende Hinweise entschlüsseln, lesen und bearbeiten dürfen. In <TrustDropHighlight /> sind sie ein sicherheitskritisches Bindeglied zwischen Plattform und interner Fallbearbeitung.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Aufgaben der Empfänger</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Entschlüsseln eingegangener Nachrichten mit lokalem Private Key.</li>
                        <li>Verifizieren digitaler Signaturen von Dateien.</li>
                        <li>Klassifizieren, Weiterleiten oder Dokumentieren von Fällen.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">Sicherheitsprinzipien</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Entschlüsselung erfolgt ausschließlich lokal im Browser.</li>
                        <li>Private Keys bleiben immer im Besitz des Empfängers.</li>
                        <li>Optional mit zusätzlichem Passwortschutz kombinierbar.</li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zu <Link href="/docs/nutzerrollen" className="underline text-emerald-400">allen Nutzerrollen</Link>
                </p>
            </div>
        </main>
    );
}
