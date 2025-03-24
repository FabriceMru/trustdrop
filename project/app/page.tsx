'use client';

import { useState, useRef } from 'react';
import { Shield, Lock, FileText, Send, ChevronRight, Building2, School, Newspaper, Users, Upload } from 'lucide-react';

// This is a demo public key - replace with your actual public key
const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
xjMEZGRkZRYJKwYBBAHaRw8BAQdA/2l+TsNY1JHb6t50yvRc1JHD0U9hxZzR
tGwZE9ZNPG3NFEpvaG4gRG9lIDxqb2huQGRvZS5pbz7CiQQQFgoAOBYhBHQy
q7LAQvD7ZIZrn3vww3JNHs/NBQJkZGRlAhsDBQsJCAcCBhUKCQgLAgQWAgMB
Ah4BAheAAAoJEHvww3JNHs/N2QYA/1HxVZJ6eAGgJBqOtC8G2H8ZVQPGnV4j
LgYV6+5j5xVDAQDjR0Aq9pGn9qZ96Gz9x/Ow19Gc7VBz+FZbxGqJJ3qOAc44
BGRkZGUSCisGAQQBl1UBBQEBB0B3CXwZ0Lv+ClH5UB5Aq7h5YDPQxqP5mEzD
TXUq9JQELgMBCAfCeAQYFggAIBYhBHQyq7LAQvD7ZIZrn3vww3JNHs/NBQJk
ZGRlAhsMAAoJEHvww3JNHs/NfJIA/jVDt0Ue2VJ5ZmJWwJRUzGsB3UqbTNKX
BqoJ6oIL+VQBAP9q0J6G1O1wHhv1Qk9YD1ZGZQeqz4DrGY3oYHpvXasB
=6Yfx
-----END PGP PUBLIC KEY BLOCK-----`;

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
    setStatus('Verschlüssele Nachricht...');

    try {
      const { encryptContent } = await import('../lib/encrypt');
      const { encryptedMessage, encryptedFile } = await encryptContent(message, file || undefined, PUBLIC_KEY);

      const res = await fetch('/api/drop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ encryptedMessage, encryptedFile }),
      });

      const data = await res.json();
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
              <a href="#submit" className="primary-button inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                Jetzt sicher melden
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
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

        {/* Submit Form */}
        <section id="submit" className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="feature-card p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Sicher und anonym melden</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Ihre verschlüsselte Nachricht
                  </label>
                  <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 input-rounded shadow-sm text-white placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Beschreiben Sie hier den Sachverhalt..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Dokumente anhängen (optional)
                  </label>
                  <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                  />
                  <div
                      onClick={handleFileAreaClick}
                      className="file-upload-area p-8 cursor-pointer text-center"
                  >
                    <Upload className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    {fileName ? (
                        <p className="text-emerald-400">{fileName}</p>
                    ) : (
                        <>
                          <p className="text-gray-300">Dateien hierher ziehen oder klicken zum Auswählen</p>
                          <p className="text-gray-500 text-sm mt-1">Maximale Dateigröße: 25MB</p>
                        </>
                    )}
                  </div>
                </div>

                <div>
                  <button
                      type="submit"
                      className="primary-button w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Sicher übermitteln
                  </button>
                  {status && (
                      <p className="mt-2 text-sm text-emerald-400">{status}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 TrustDrop. Ein Open-Source-Projekt für mehr Transparenz und Sicherheit.
            </p>
          </div>
        </footer>
      </main>
  );
}