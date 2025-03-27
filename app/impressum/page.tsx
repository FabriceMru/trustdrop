'use client';

import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-emerald-400">📄 Impressum</h1>

                {/* Herausgeber (für öffentliche Instanz) */}
                <section>
                    <h2 className="text-xl font-semibold text-emerald-400 mb-2">🔹 Herausgeber</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Diese Instanz von <TrustDropHighlight /> wird betrieben von:<br /><br />
                        Fabrice N. <br />
                        <TrustDropHighlight /> Projekt <br />
                        Beispielstraße 123 <br />
                        12345 Berlin <br />
                        Deutschland <br /><br />
                        E-Mail: <a href="mailto:kontakt@trustdrop.io" className="text-emerald-400 underline">kontakt@trustdrop.io</a><br />
                    </p>
                </section>

                {/* Verantwortlicher Inhalt */}
                <section>
                    <h2 className="text-xl font-semibold text-emerald-400 mb-2">👤 Verantwortlich nach § 55 Abs. 2 RStV</h2>
                    <p className="text-gray-300">
                        Fabrice M. (Adresse wie oben)
                    </p>
                </section>

                {/* Haftungsausschluss */}
                <section>
                    <h2 className="text-xl font-semibold text-emerald-400 mb-2">⚠️ Haftung für Inhalte & Links</h2>
                    <p className="text-gray-300">
                        Trotz sorgfältiger Prüfung übernehmen wir keine Haftung für externe Links. Für die Inhalte
                        verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
                    </p>
                </section>

                {/* Selbsthosting-Hinweis */}
                <section>
                    <h2 className="text-xl font-semibold text-emerald-400 mb-2">🛠️ Hinweis für Selbsthosting</h2>
                    <p className="text-gray-300">
                        Wenn du <TrustDropHighlight /> selbst hostest, bist du verpflichtet, ein eigenes Impressum und eine Datenschutzerklärung
                        auf deiner Instanz bereitzustellen. Der Herausgeber dieser Website ist nicht verantwortlich für Inhalte fremdgehosteter Instanzen.
                    </p>
                </section>
            </div>
        </main>
    );
}
