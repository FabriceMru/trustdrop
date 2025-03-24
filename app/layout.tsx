import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrustDrop - Sicherer digitaler Briefkasten für vertrauliche Hinweise',
  description: 'TrustDrop ist eine sichere Plattform für anonyme Hinweise und Dokumente. Ende-zu-Ende-verschlüsselt, ohne Tracking, DSGVO-konform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}