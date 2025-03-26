'use client';

import { Lock, ShieldCheck, EyeOff, Globe, Code2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen gradient-bg py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-6">Warum TrustDrop?</h1>
                <p className="text-gray-300 text-lg mb-12">
                    TrustDrop ist ein moderner, verschlüsselter Hinweisgeber-Briefkasten, entwickelt für maximale Sicherheit, Anonymität und Benutzerfreundlichkeit.
                    Unser Ziel: Eine vertrauenswürdige Plattform, die jedem Menschen die Möglichkeit gibt, ohne Angst Missstände zu melden.
                </p>

                <div className="grid md:grid-cols-2 gap-10 text-left">
                    {/* Punkt 1 */}
                    <div className="feature-card p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                            <EyeOff className="h-6 w-6 text-emerald-400 mr-3" />
                            <h2 className="text-xl font-semibold text-white">Keine Metadaten. Kein Tracking.</h2>
                        </div>
                        <p className="text-gray-400">
                            TrustDrop speichert keine IP-Adressen, verwendet keine Cookies oder externe Skripte. Deine Identität bleibt geschützt – bei jedem Schritt.
                        </p>
                    </div>

                    {/* Punkt 2 */}
                    <div className="feature-card p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                            <Lock className="h-6 w-6 text-emerald-400 mr-3" />
                            <h2 className="text-xl font-semibold text-white">Ende-zu-Ende-Verschlüsselung</h2>
                        </div>
                        <p className="text-gray-400">
                            Deine Nachricht wird direkt im Browser verschlüsselt – bevor sie unseren Server erreicht. Niemand außer dem Empfänger kann sie lesen.
                        </p>
                    </div>

                    {/* Punkt 3 */}
                    <div className="feature-card p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                            <ShieldCheck className="h-6 w-6 text-emerald-400 mr-3" />
                            <h2 className="text-xl font-semibold text-white">Sicher auch in Risikoumgebungen</h2>
                        </div>
                        <p className="text-gray-400">
                            TrustDrop basiert auf Best Practices aus dem Bereich Digital Security. Ob für Medien, NGOs oder Unternehmen – dein Hinweis bleibt geschützt.
                        </p>
                    </div>

                    {/* Punkt 4 */}
                    <div className="feature-card p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                            <Code2 className="h-6 w-6 text-emerald-400 mr-3" />
                            <h2 className="text-xl font-semibold text-white">Offen. Transparent. Kontrollierbar.</h2>
                        </div>
                        <p className="text-gray-400">
                            Der Quellcode von TrustDrop ist offen einsehbar. Du kannst jederzeit überprüfen, wie deine Daten verarbeitet und geschützt werden.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-gray-400 text-sm text-center">
                    <p>© 2025 TrustDrop – eine Marke von Kōbō Kitsune</p>
                    <p className="mt-1">Vertraulichkeit. Sicherheit. Verantwortung.</p>
                </div>
            </div>
        </main>
    );
}
