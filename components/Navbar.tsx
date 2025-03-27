'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="text-emerald-400 font-bold text-xl hover:opacity-80 transition">
                    TrustDrop
                </Link>

                {/* Hamburger Icon (nur mobil sichtbar) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menü öffnen"
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Desktop Menü */}
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    <Link href="/" className="hover:text-emerald-400">Home</Link>
                    <Link href="/about" className="hover:text-emerald-400">Über</Link>
                    <Link href="/message" className="hover:text-emerald-400">Nachricht</Link>
                    <Link href="/admin" className="hover:text-emerald-400">Admin</Link>
                    <Link href="/docs" className="hover:text-emerald-400">Dokumentation</Link>
                    <Link href="/donate" className="hover:text-emerald-400">Spenden</Link>
                    <Link href="/contact" className="hover:text-emerald-400">Kontakt</Link>
                </div>
            </div>

            {/* Mobile Menü */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-4 px-4">
                    <Link href="/" onClick={handleLinkClick} className="block hover:text-emerald-400">Home</Link>
                    <Link href="/about" onClick={handleLinkClick} className="block hover:text-emerald-400">Über</Link>
                    <Link href="/message" onClick={handleLinkClick} className="block hover:text-emerald-400">Nachricht</Link>
                    <Link href="/admin" onClick={handleLinkClick} className="block hover:text-emerald-400">Admin</Link>
                    <Link href="/docs" onClick={handleLinkClick} className="block hover:text-emerald-400">Dokumentation</Link>
                    <Link href="/donate" onClick={handleLinkClick} className="block hover:text-emerald-400">Spenden</Link>
                    <Link href="/contact" onClick={handleLinkClick} className="block hover:text-emerald-400">Kontakt</Link>
                </div>
            )}
        </nav>
    );
}
