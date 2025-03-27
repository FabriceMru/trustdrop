'use client';

import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function WasIstTrustDrop() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-emerald-400">📬 Was ist <TrustDropHighlight/>?</h1>

                {/* Beschreibung */}
                <section className="mb-10">
                    <p className="text-gray-300">
                        <TrustDropHighlight/> ist ein digitaler, verschlüsselter Briefkasten für anonyme und
                        vertrauliche Hinweise.
                        Die Plattform ermöglicht es Einzelpersonen, sensible Informationen sicher und vollständig anonym
                        an eine Organisation oder Redaktion zu übermitteln –
                        ohne technische Hürden oder die Gefahr, identifiziert zu werden.
                    </p>
                </section>

                {/* Ziel */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🧭 Ziel & Motivation</h2>
                    <p className="text-gray-300">
                        Die Welt braucht mutige Menschen, die Missstände aufdecken.
                        <TrustDropHighlight/> wurde entwickelt, um genau diese Menschen zu schützen –
                        mit einer modernen, offenen Plattform für sichere Kommunikation zwischen Hinweisgeber:innen und
                        Empfänger:innen wie NGOs, Redaktionen, Unternehmen oder öffentlichen Stellen.
                    </p>
                </section>

                {/* Kernfunktionen */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">💡 Kernfunktionen</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Verschlüsselte Nachrichtenübermittlung direkt im Browser (Ende-zu-Ende).</li>
                        <li>Optionaler Datei-Upload mit PGP-Verschlüsselung und digitaler Signatur.</li>
                        <li>100 % anonyme Nutzung – keine Registrierung, keine IP-Adressen, keine Cookies.</li>
                        <li>Lokale Entschlüsselung im Admin-Bereich – private Schlüssel bleiben beim Empfänger.</li>
                        <li>Open Source & selbst hostbar – volle Kontrolle über Infrastruktur und Daten.</li>
                    </ul>
                </section>

                {/* Sicherheit */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🔐 Sicherheit & Privatsphäre</h2>
                    <p className="text-gray-300 mb-4">
                        <TrustDropHighlight/> nutzt moderne Verschlüsselungsverfahren auf Basis
                        von <strong>OpenPGP</strong>, um Inhalte abhörsicher zu machen.
                        Die gesamte Kommunikation – inklusive hochgeladener Dateien – wird direkt im Browser der
                        Hinweisgeber:in verschlüsselt
                        und kann nur vom vorgesehenen Empfänger mit dessen privatem Schlüssel entschlüsselt werden.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li><strong>Keine IP-Adressen</strong> – es werden keinerlei Nutzerspuren gespeichert oder
                            geloggt.
                        </li>
                        <li><strong>Keine Cookies</strong> – vollständige Nutzung ohne Tracking-Technologie.</li>
                        <li><strong>Keine Drittanbieter-Skripte</strong> – keine eingebetteten Fonts, Analytik-Tools
                            oder CDNs.
                        </li>
                        <li><strong>Optionaler Passwortschutz</strong> – beim Entschlüsseln kann ein zusätzliches
                            Nutzerpasswort verlangt werden.
                        </li>
                    </ul>
                </section>

                {/* Einsatzbereiche */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🛠️ Einsatzmöglichkeiten</h2>
                    <p className="text-gray-300 mb-4">
                        <TrustDropHighlight/> eignet sich unter anderem für folgende Anwendungsbereiche:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Whistleblowing in Unternehmen (z. B. Compliance & Hinweisgeberschutzgesetz)</li>
                        <li>Journalistische Recherchen & sichere Kommunikation mit Informant:innen</li>
                        <li>NGO-Kontaktstellen für schutzbedürftige oder anonyme Meldungen</li>
                        <li>Feedback-Systeme an Schulen, Unis oder öffentlichen Einrichtungen</li>
                        <li>Digitale Briefkästen für interne oder externe Ombudspersonen</li>
                    </ul>
                </section>

                {/* Vision */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">🚀 Vision</h2>
                    <p className="text-gray-300">
                        <TrustDropHighlight/> soll zum <strong>Standardwerkzeug</strong> für vertrauliche
                        Hinweisübermittlung werden –
                        technisch solide, barrierefrei nutzbar und vollständig transparent.
                        Der Quellcode ist offen, die Roadmap öffentlich, und die Plattform wird aktiv weiterentwickelt.
                    </p>
                </section>

                {/* Links */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">📖 Weiterführende Themen</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li><Link href="/docs/wie-es-funktioniert" className="text-emerald-400 underline">Wie
                            funktioniert TrustDrop?</Link></li>
                        <li><Link href="/docs/sicherheit" className="text-emerald-400 underline">Sicherheit &
                            Dateisignaturen</Link></li>
                        <li><Link href="/docs/nutzerrollen" className="text-emerald-400 underline">Nutzerrollen im
                            System</Link></li>
                    </ul>
                </section>

                <p className="text-sm text-gray-400 mt-6">
                    Zurück zur <Link href="/docs" className="underline text-emerald-400">Hauptdokumentation</Link>
                </p>
            </div>
        </main>
    );
}
