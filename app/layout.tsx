import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; // 🧩 Navbar importiert

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TrustDrop - Sicherer digitaler Briefkasten für vertrauliche Hinweise',
    description:
        'TrustDrop ist eine sichere Plattform für anonyme Hinweise und Dokumente. Ende-zu-Ende-verschlüsselt, ohne Tracking, DSGVO-konform.',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" suppressHydrationWarning={true}>
        <body className={`${inter.className} gradient-bg`}>
        <Navbar /> {/* Navigation eingebunden */}
        {children}
        </body>
        </html>
    );
}
