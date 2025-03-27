'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { MoreVertical, ChevronDown, ChevronRight, ChevronLeft, X } from 'lucide-react';

const links = [
    {
        title: 'Überblick',
        items: [
            { label: 'Was ist TrustDrop?', href: '/docs/was-ist-trustdrop' },
            { label: 'Wie es funktioniert', href: '/docs/wie-es-funktioniert' },
            { label: 'Vorteile', href: '/docs/vorteile' },
        ],
    },
    {
        title: 'Nutzerrollen',
        items: [
            { label: 'Übersicht', href: '/docs/nutzerrollen' },
            { label: 'Hinweisgeber', href: '/docs/nutzerrollen/hinweisgeber' },
            { label: 'Empfänger', href: '/docs/nutzerrollen/empfaenger' },
            { label: 'Admins', href: '/docs/nutzerrollen/admins' },
        ],
    },
    {
        title: 'Technologie',
        items: [
            { label: 'Verschlüsselung & Schlüssel', href: '/docs/technologie/verschluesselung-und-schluessel' },
        ],
    },
    {
        title: 'Sicherheit',
        items: [
            { label: 'Dateisignaturen & Verifikation', href: '/docs/sicherheit' },
        ],
    },
    {
        title: 'Datenschutz',
        items: [
            { label: 'Grundlagen & DSGVO', href: '/docs/datenschutz/grundlagen' },
            { label: 'Keine Metadaten', href: '/docs/datenschutz/metadaten' },
        ],
    },
    {
        title: 'Kontakt',
        items: [
            { label: 'Kontaktmöglichkeiten', href: '/docs/kontakt/kontaktmoeglichkeiten' },
        ],
    },
];

export default function DocsSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const [openSections, setOpenSections] = useState<Record<number, boolean>>(() => {
        const state: Record<number, boolean> = {};
        links.forEach((_, i) => (state[i] = true));
        return state;
    });
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    }, [mobileOpen]);

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="md:hidden px-4 mb-4">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="text-emerald-400 p-2"
                    aria-label="Menü öffnen"
                >
                    <MoreVertical className="h-5 w-5" />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={clsx(
                    'bg-gray-900 text-white p-4 text-sm transition-all duration-300 rounded z-50 md:z-auto',
                    collapsed ? 'w-10' : 'w-full max-w-xs',
                    'md:relative',
                    mobileOpen ? 'fixed top-0 left-0 h-full w-64 overflow-y-auto shadow-lg' : 'hidden md:block'
                )}
            >
                {/* Close mobile */}
                <div className="flex justify-between md:hidden mb-4">
                    <span className="font-bold text-emerald-400">Menü</span>
                    <button onClick={() => setMobileOpen(false)} aria-label="Schließen">
                        <X className="h-5 w-5 text-white" />
                    </button>
                </div>

                {/* Collapse/Expand Button */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-emerald-400 hover:text-white mb-4 focus:outline-none hidden md:block"
                    aria-label="Sidebar einklappen"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>

                {!collapsed && links.map((section, index) => (
                    <div key={index} className="mb-6">
                        <button
                            onClick={() => setOpenSections({ ...openSections, [index]: !openSections[index] })}
                            className="flex items-center justify-between w-full text-left text-xs font-bold uppercase tracking-wider mb-2 text-emerald-400"
                            aria-label={`Abschnitt ${section.title} ${openSections[index] ? 'zuklappen' : 'aufklappen'}`}
                        >
                            {section.title}
                            {openSections[index] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        {openSections[index] && (
                            <ul className="space-y-1">
                                {section.items.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={clsx(
                                                'block px-2 py-1 rounded hover:bg-gray-800 transition-colors',
                                                pathname === link.href && 'bg-gray-800 text-white font-semibold'
                                            )}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </aside>
        </>
    );
}
