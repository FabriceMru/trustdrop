'use client';

import { useState, useRef } from 'react';
import { Upload, Send } from 'lucide-react';
import { publicKey } from '../../lib/key';

export default function MessagePage() {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!publicKey) {
            setStatus('Öffentlicher Schlüssel nicht geladen.');
            return;
        }

        setStatus('Verschlüssele Nachricht...');

        try {
            const { encryptContent } = await import('../../lib/encrypt');
            const { encryptedMessage, encryptedFile } = await encryptContent(message, file || undefined, publicKey);

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

            setStatus(`✅ Nachricht sicher übermittelt. Ihre Nachricht-ID: ${data.id}`);
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
        <main className="min-h-screen gradient-bg py-20 px-6">
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
                            {status && <p className="mt-2 text-sm text-emerald-400">{status}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
