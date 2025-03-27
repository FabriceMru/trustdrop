'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function SicherheitDocsPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <header>
                    <h1 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center">
                        <span className="mr-2" role="img" aria-label="Sicherheitsschloss">🔐</span>
                        Sicherheit & Dateisignaturen
                    </h1>
                </header>

                {/* Digitale Signatur */}
                <section aria-labelledby="digital-signature-heading">
                    <h2
                        id="digital-signature-heading"
                        className="text-xl font-semibold mb-4 text-white"
                    >
                        Was ist eine digitale Signatur?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        <TrustDropHighlight /> nutzt digitale Signaturen, um die Authentizität und Integrität hochgeladener Dateien zu gewährleisten. Die Signatur wird mit dem privaten PGP-Schlüssel der absendenden Person erzeugt, was eine fälschungssichere Identifikation ermöglicht.
                    </p>
                </section>

                {/* Ablauf */}
                <section aria-labelledby="process-heading">
                    <h2
                        id="process-heading"
                        className="text-xl font-semibold mb-4 text-white"
                    >
                        Wie funktioniert das?
                    </h2>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 pl-2">
                        <li>Vor der Verschlüsselung wird die Datei digital signiert.</li>
                        <li>Nach dem Entschlüsseln erfolgt die Verifikation im Admin-Panel mittels öffentlichem Schlüssel.</li>
                        <li>Nur bei einer gültigen Signatur gilt die Datei als vertrauenswürdig.</li>
                    </ol>
                </section>

                {/* Lokale Entschlüsselung */}
                <section aria-labelledby="local-decryption-heading">
                    <h2
                        id="local-decryption-heading"
                        className="text-xl font-semibold mb-4 text-white flex items-center"
                    >
                        <span className="mr-2" role="img" aria-label="Schlüssel">🔑</span>
                        Lokale Entschlüsselung
                    </h2>
                    <div className="text-gray-300 space-y-4">
                        <p className="leading-relaxed">
                            Die Entschlüsselung erfolgt ausschließlich im Browser – der private Schlüssel verlässt niemals das Gerät. Zusätzlich wird ein robuster Passwortschutz aktiviert.
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Vollständige Vertraulichkeit: Kein Serverzugriff auf sensible Inhalte</li>
                            <li>Mehrschichtige Sicherheit durch Kombination von Schlüssel & Passwort</li>
                        </ul>
                    </div>
                </section>

                {/* Warum relevant */}
                <section aria-labelledby="importance-heading">
                    <h2
                        id="importance-heading"
                        className="text-xl font-semibold mb-4 text-white"
                    >
                        Warum ist das wichtig?
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
                        <li>Effektive Prävention von Datenmanipulationen und Lecks</li>
                        <li>Eindeutiger Nachweis der Herkunft und Unversehrtheit</li>
                        <li>Substanzielle Stärkung des Vertrauens in eingereichte Dokumente</li>
                    </ul>
                </section>

                <footer className="mt-8">
                    <Link
                        href="/docs"
                        className="text-sm text-emerald-400 hover:underline transition-colors"
                    >
                        ← Zurück zur Hauptdokumentation
                    </Link>
                </footer>
            </div>
        </main>
    );
}
