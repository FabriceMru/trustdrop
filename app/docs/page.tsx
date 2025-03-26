import Link from 'next/link';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function DocsHome() {
    return (
        <main className="min-h-screen gradient-bg text-white py-16 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Willkommen bei den <TrustDropHighlight /> Dokumentationen</h1>
                <p className="text-lg text-gray-300 mb-8">
                    Hier erfährst du alles über Funktionsweise, Sicherheit und Anwendung von <TrustDropHighlight /> – deinem sicheren, anonymen Hinweisgebersystem.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/docs/was-ist-trustdrop" className="feature-card p-6 shadow hover:bg-emerald-700 transition">
                        <h2 className="text-xl font-semibold mb-2">Was ist <TrustDropHighlight />?</h2>
                        <p className="text-gray-300">Grundidee & Motivation hinter <TrustDropHighlight />.</p>
                    </Link>
                    <Link href="/docs/vorteile" className="feature-card p-6 shadow hover:bg-emerald-700 transition">
                        <h2 className="text-xl font-semibold mb-2">Warum <TrustDropHighlight />?</h2>
                        <p className="text-gray-300">Vorteile gegenüber klassischen Tools.</p>
                    </Link>
                    <Link href="/docs/wie-es-funktioniert" className="feature-card p-6 shadow hover:bg-emerald-700 transition">
                        <h2 className="text-xl font-semibold mb-2">Wie funktioniert es?</h2>
                        <p className="text-gray-300">Ablauf einer sicheren Übermittlung.</p>
                    </Link>
                    <Link href="/docs/nutzerrollen" className="feature-card p-6 shadow hover:bg-emerald-700 transition">
                        <h2 className="text-xl font-semibold mb-2">Nutzerrollen</h2>
                        <p className="text-gray-300">Von Hinweisgebern bis Admins.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
