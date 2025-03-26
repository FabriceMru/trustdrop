'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { Shield, Lock, FileText, Send, ChevronRight, Building2, School, Newspaper, Users, Upload } from 'lucide-react';
import { publicKey } from '../lib/key'; // KEIN .ts anhängen!

export default function Home() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const features = [
    {
      icon: <Lock className="h-6 w-6 text-emerald-400" />,
      title: "Ende-zu-Ende-Verschlüsselung",
      description: "Ihre Nachrichten werden direkt im Browser verschlüsselt."
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Absolute Anonymität",
      description: "Keine IP-Adressen, keine Cookies, keine Tracker."
    },
    {
      icon: <FileText className="h-6 w-6 text-emerald-400" />,
      title: "Sichere Dokumentenübermittlung",
      description: "Laden Sie verschlüsselte Dokumente und Beweise hoch."
    }
  ];

  const useCases = [
    {
      icon: <Building2 className="h-8 w-8 text-emerald-400" />,
      title: "Unternehmen",
      description: "Internes Whistleblowing-System für Mitarbeiter"
    },
    {
      icon: <School className="h-8 w-8 text-emerald-400" />,
      title: "Bildungseinrichtungen",
      description: "Anonyme Meldestelle für Schulen und Universitäten"
    },
    {
      icon: <Newspaper className="h-8 w-8 text-emerald-400" />,
      title: "Medien & NGOs",
      description: "Sicherer Kanal für Informanten und Whistleblower"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-400" />,
      title: "Öffentliche Verwaltung",
      description: "Bürgermeldungen und Hinweise auf Missstände"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey) {
      setStatus('Öffentlicher Schlüssel nicht geladen.');
      return;
    }

    setStatus('Verschlüssele Nachricht...');

    try {
      const { encryptContent } = await import('../lib/encrypt');
      const { encryptedMessage, encryptedFile } = await encryptContent(message, file || undefined, publicKey);

      // 🧪 Debug-Ausgabe:
      console.log({ encryptedMessage, encryptedFile });


      const res = await fetch('/api/drop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ encryptedMessage, encryptedFile }),
      });

      const data = await res.json();

      if (!data || !data.id) {
        setStatus('Nachricht übermittelt, aber keine ID empfangen.');
        return;
      }

      setStatus(`Nachricht sicher übermittelt. Ihre Nachricht-ID: ${data.id}`);
      setMessage('');
      setFileName('');
      setFile(null);
    } catch (error) {
      console.error('Encryption error:', error);
      setStatus('Fehler bei der Verschlüsselung. Bitte versuchen Sie es erneut.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFileName(selectedFile.name);
      setFile(selectedFile);
    }
  };

  const handleFileAreaClick = () => {
    fileInputRef.current?.click();
  };

  return (
      <main className="min-h-screen gradient-bg">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                TrustDrop
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Sicher. Anonym. Ihre Stimme zählt.
                Der verschlüsselte Briefkasten für vertrauliche Hinweise und Dokumente.
              </p>
              <Link href="/message" passHref>
                <button className="primary-button inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                  Jetzt sicher melden
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                  <div key={index} className="feature-card p-6 shadow-lg">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Einsatzbereiche</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                  <div key={index} className="text-center">
                    <div className="feature-card p-6 shadow-lg mb-4 inline-block">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 TrustDrop – eine Marke von Kōbō Kitsune.
              Eine datensichere Plattform für anonyme Hinweise im digitalen Zeitalter.</p>
          </div>
        </footer>
      </main>
  );
}