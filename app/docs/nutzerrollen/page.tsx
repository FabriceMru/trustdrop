import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';


export default function NutzerrollenPage() {
    return (
        <main className="min-h-screen gradient-bg text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-emerald-400">Nutzerrollen</h1>
                <p className="text-gray-300 mb-12">
                    Bei <TrustDropHighlight /> unterscheiden wir drei Hauptrollen: Hinweisgeber, Empfänger und Admins. Jede Rolle hat spezifische Aufgaben
                    und Berechtigungen innerhalb des Systems.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/docs/nutzerrollen/hinweisgeber">
                        <div className="feature-card p-6 shadow-lg hover:bg-emerald-800 transition cursor-pointer">
                            <h2 className="text-xl font-semibold text-white mb-2">Hinweisgeber</h2>
                            <p className="text-gray-300 text-sm">Anonym und sicher Hinweise übermitteln – ohne Rückverfolgbarkeit.</p>
                        </div>
                    </Link>

                    <Link href="/docs/nutzerrollen/empfaenger">
                        <div className="feature-card p-6 shadow-lg hover:bg-emerald-800 transition cursor-pointer">
                            <h2 className="text-xl font-semibold text-white mb-2">Empfänger</h2>
                            <p className="text-gray-300 text-sm">Verifizierte Personen, die Hinweise entschlüsseln und bearbeiten dürfen.</p>
                        </div>
                    </Link>

                    <Link href="/docs/nutzerrollen/admins">
                        <div className="feature-card p-6 shadow-lg hover:bg-emerald-800 transition cursor-pointer">
                            <h2 className="text-xl font-semibold text-white mb-2">Admins</h2>
                            <p className="text-gray-300 text-sm">Verwalten die Infrastruktur, Schlüssel und Sicherheitseinstellungen.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
