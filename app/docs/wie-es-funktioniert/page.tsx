'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function WieEsFunktioniert() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">⚙️ Wie funktioniert <TrustDropHighlight />?</h1>

                {/* Überblick */}
                <section className="mb-10">
                    <p className="text-gray-300">
                        <TrustDropHighlight /> ermöglicht es Menschen, vertrauliche Hinweise sicher und anonym zu übermitteln.
                        Das System funktioniert vollständig browserbasiert – ohne App, ohne Account, ohne technische Vorkenntnisse.
                    </p>
                </section>

                {/* Schritt-für-Schritt */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🔄 Ablauf einer Übermittlung</h2>
                    <ol className="list-decimal list-inside text-gray-300 space-y-1">
                        <li>Die Hinweisgeber:in ruft die Nachrichtenseite im Browser auf.</li>
                        <li>Ein Textfeld für die Nachricht und ein optionaler Datei-Upload stehen bereit.</li>
                        <li>Alle Inhalte werden direkt im Browser mit dem öffentlichen Schlüssel des Empfängers verschlüsselt.</li>
                        <li>Optional wird eine digitale Signatur erstellt, die den Ursprung und die Integrität absichert.</li>
                        <li>Die verschlüsselten Daten werden über eine sichere Verbindung an den <TrustDropHighlight />-Server gesendet.</li>
                        <li>Es werden <strong>keine Metadaten, keine IP-Adressen, keine Cookies</strong> gespeichert.</li>
                    </ol>
                </section>

                {/* Empfängerseite */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">📥 Was passiert beim Empfänger?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Die Empfänger:in meldet sich im geschützten Admin-Panel an.</li>
                        <li>Ein eigener privater Schlüssel wird lokal importiert (nicht auf dem Server gespeichert).</li>
                        <li>Nachrichten werden lokal im Browser entschlüsselt – <strong>niemals auf dem Server</strong>.</li>
                        <li>Dateien können verifiziert werden – inklusive Signaturprüfung.</li>
                        <li>Optional: Passwortabfrage zum Schutz des Private Keys.</li>
                    </ul>
                </section>

                {/* Sicherheit */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🔐 Warum ist das so sicher?</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Verschlüsselung passiert <strong>vor dem Versand</strong>, nicht erst auf dem Server.</li>
                        <li>Empfänger benötigen den passenden privaten Schlüssel – niemand sonst kann mitlesen.</li>
                        <li>Signaturen schützen zusätzlich vor Manipulation oder Verfälschung.</li>
                        <li>Keine externen Tracker, keine IP-Protokolle – maximale Anonymität.</li>
                    </ul>
                </section>

                {/* Link */}
                <p className="text-sm text-gray-400 mt-6">
                    Weiter zu <Link href="/docs/sicherheit" className="underline text-emerald-400">Sicherheit & Dateisignaturen</Link>
                </p>
            </div>
        </main>
    );
}
