'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
            <Link href="/" className="text-emerald-400 font-bold text-xl hover:opacity-80 transition">
                TrustDrop
            </Link>
            <div className="flex space-x-6 text-sm font-medium">
                <Link href="/" className="hover:text-emerald-400">Home</Link>
                <Link href="/about" className="hover:text-emerald-400">Über</Link>
                <Link href="/message" className="hover:text-emerald-400">Nachricht</Link>
                <Link href="/admin" className="hover:text-emerald-400">Admin</Link>
                <Link href="/docs" className="hover:text-emerald-400">Dokumentation</Link>
                <Link href="/donate" className="hover:text-emerald-400">Spenden</Link>
                <Link href="/contact" className="hover:text-emerald-400">Kontakt</Link>
            </div>
        </nav>
    );
}
