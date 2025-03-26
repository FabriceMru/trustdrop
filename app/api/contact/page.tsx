'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({
        organization: '',
        subject: '',
        location: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        alert('Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.');
    };

    return (
        <main className="h-screen flex items-center justify-center bg-gray-950 text-white px-4">
            <div className="w-full max-w-lg bg-gray-900 p-8 rounded shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Kontakt aufnehmen</h1>
                <p className="text-gray-300 mb-6 text-sm">
                    Wenn Sie TrustDrop in Ihrer Organisation nutzen möchten oder Fragen haben, füllen Sie bitte das Formular aus.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="organization" className="block text-sm font-medium mb-1">Name Ihrer Organisation *</label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            required
                            value={form.organization}
                            onChange={handleChange}
                            className="input w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Betreff Ihrer Anfrage *</label>
                        <textarea
                            id="subject"
                            name="subject"
                            rows={3}
                            required
                            value={form.subject}
                            onChange={handleChange}
                            className="input w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium mb-1">Standort Ihrer Organisation</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            className="input w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail-Adresse *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="input w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Möchten Sie uns noch etwas mitteilen?</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={form.message}
                            onChange={handleChange}
                            className="input w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="primary-button w-full text-base font-medium shadow hover:shadow-lg transition"
                    >
                        Abschicken
                    </button>
                </form>
            </div>
        </main>
    );
}
