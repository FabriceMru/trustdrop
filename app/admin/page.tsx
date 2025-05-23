'use client';

import { useState, useRef } from 'react';
import { Shield, Key, FileText, Eye, Trash2, Download, Upload, Lock, CheckCircle } from 'lucide-react';
import TrustDropHighlight from '@/components/TrustDropHighlight';

interface Submission {
    id: string;
    encryptedMessage: string;
    encryptedFile: string | null;
    date: string;
    read?: boolean;
}

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [privateKey, setPrivateKey] = useState('');
    const [passphrase, setPassphrase] = useState('');
    const [decryptedContent, setDecryptedContent] = useState<{ [key: string]: { message: string; file?: Uint8Array } }>({});
    const [status, setStatus] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin') {
            setIsAuthenticated(true);
            await loadSubmissions();
        } else {
            setStatus('Ungültiges Passwort');
        }
    };

    const loadSubmissions = async () => {
        try {
            const res = await fetch('/api/admin/submissions');
            const data = await res.json();
            if (!Array.isArray(data.submissions)) throw new Error('Antwort ist kein Array');
            setSubmissions(data.submissions);
        } catch (error) {
            console.error('Fehler beim Laden:', error);
            setSubmissions([]);
            setStatus('Fehler beim Laden der Einreichungen');
        }
    };

    const handleKeyUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const text = await file.text();
            setPrivateKey(text);
            setStatus('Privater Schlüssel geladen');
        }
    };

    const decryptMessage = async (submission: Submission) => {
        if (!privateKey) {
            setStatus('Bitte laden Sie zuerst Ihren privaten Schlüssel hoch');
            return;
        }

        try {
            setStatus('Entschlüssele...');
            const { decryptContent } = await import('../../lib/decrypt');
            const { decryptedMessage, decryptedFile } = await decryptContent(
                submission.encryptedMessage,
                submission.encryptedFile,
                privateKey,
                passphrase || undefined
            );

            setDecryptedContent((prev) => ({
                ...prev,
                [submission.id]: { message: decryptedMessage as string, file: decryptedFile as Uint8Array }
            }));

            setSubmissions(submissions.map((s) => s.id === submission.id ? { ...s, read: true } : s));
            setStatus('Entschlüsselung erfolgreich');
        } catch (error) {
            console.error(error);
            setStatus('Fehler bei der Entschlüsselung: ' + (error as Error).message);
        }
    };

    const downloadDecryptedFile = (submissionId: string) => {
        const decrypted = decryptedContent[submissionId]?.file;
        if (!decrypted) return alert('Keine entschlüsselte Datei gefunden');
        const blob = new Blob([decrypted], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${submissionId}.bin`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const deleteSubmission = async (id: string) => {
        try {
            await fetch(`/api/admin/submissions/${id}`, { method: 'DELETE' });
            await loadSubmissions();
            setStatus('Einreichung gelöscht');
        } catch (error) {
            setStatus('Fehler beim Löschen');
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen gradient-bg py-20 px-6">
                <div className="max-w-md mx-auto">
                    <div className="feature-card p-8 shadow-lg">
                        <div className="text-center mb-6">
                            <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                            <h1 className="text-2xl font-bold text-white"><TrustDropHighlight /> <br /><br />Admin</h1>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 input-rounded shadow-sm text-white placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                            <button
                                type="submit"
                                className="primary-button w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                                <Key className="h-5 w-5 mr-2" />
                                Anmelden
                            </button>
                            {status && <p className="text-sm text-red-400 text-center">{status}</p>}
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen gradient-bg py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="feature-card p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="text-gray-400 hover:text-white transition-colors text-sm mt-2 md:mt-0"
                        >
                            Abmelden
                        </button>
                    </div>

                    <div className="mb-8 p-6 feature-card">
                        <h2 className="text-xl font-semibold text-white mb-4">Privater Schlüssel</h2>
                        <div className="space-y-4">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleKeyUpload}
                                accept=".asc,.gpg"
                                className="hidden"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="primary-button inline-flex items-center px-6 py-3 text-base font-medium text-gray-900"
                            >
                                <Upload className="h-5 w-5 mr-2" />
                                Privaten Schlüssel hochladen
                            </button>
                            {privateKey && (
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="password"
                                        placeholder="Passwort"
                                        value={passphrase}
                                        onChange={(e) => setPassphrase(e.target.value)}
                                        className="px-4 py-2 bg-gray-900 border border-gray-700 input-rounded text-white w-full"
                                    />
                                    <Lock className="h-5 w-5 text-emerald-400" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {Array.isArray(submissions) && submissions.map((submission) => (
                            <div key={submission.id} className={`feature-card p-6 ${submission.read ? 'border-emerald-800' : ''}`}>
                                <div className="mb-4">
                                    <p className="text-gray-400 text-sm">ID: {submission.id}</p>
                                    <p className="text-gray-400 text-sm">Datum: {new Date(submission.date).toLocaleString('de-DE')}</p>
                                    {submission.read && (
                                        <div className="flex items-center text-emerald-400 text-sm mt-1">
                                            <CheckCircle className="h-4 w-4 mr-1" />
                                            Gelesen
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <button
                                        onClick={() => decryptMessage(submission)}
                                        className="p-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                        title="Entschlüsseln"
                                    >
                                        <Eye className="h-5 w-5" />
                                    </button>
                                    {submission.encryptedFile && decryptedContent[submission.id]?.file && (
                                        <button
                                            onClick={() => downloadDecryptedFile(submission.id)}
                                            className="p-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                                            title="Datei herunterladen"
                                        >
                                            <Download className="h-5 w-5" />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteSubmission(submission.id)}
                                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                                        title="Löschen"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                                {decryptedContent[submission.id] && (
                                    <div className="mt-4 p-4 bg-gray-900 input-rounded">
                                        <h3 className="text-sm font-medium text-gray-300 mb-2">Entschlüsselte Nachricht:</h3>
                                        <div className="bg-gray-900 p-4 rounded whitespace-pre-wrap break-words font-mono text-gray-100">
                                            {decryptedContent[submission.id].message}
                                        </div>
                                    </div>
                                )}
                                {submission.encryptedFile && (
                                    <div className="mt-2 flex items-center">
                                        <FileText className="h-4 w-4 text-emerald-400 mr-2" />
                                        <span className="text-sm text-gray-400">Enthält eine verschlüsselte Datei</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        {submissions.length === 0 && (
                            <p className="text-center text-gray-400">Keine Einreichungen vorhanden</p>
                        )}
                    </div>

                    {status && (
                        <p className="mt-4 text-sm text-emerald-400 text-center">{status}</p>
                    )}
                </div>
            </div>
        </main>
    );
}
