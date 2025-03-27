'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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

    return (
        <aside className="w-full max-w-xs p-4 text-sm text-white bg-gray-900 rounded">
            {links.map((section, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-emerald-400">
                        {section.title}
                    </h3>
                    <ul className="space-y-1">
                        {section.items.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        'block px-2 py-1 rounded hover:bg-gray-800 transition-colors',
                                        pathname === link.href && 'bg-gray-800 text-white font-semibold'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}
