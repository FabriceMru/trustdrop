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
        // TODO: handle form submission logic (z. B. API senden)
        console.log(form);
        alert('Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.');
    };

    return (
        <main className="min-h-screen gradient-bg text-white py-16 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Kontakt aufnehmen</h1>
                <p className="text-gray-300 mb-8">
                    Wenn Sie TrustDrop in Ihrer Organisation nutzen möchten oder Fragen haben, füllen Sie bitte das Formular aus.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="organization" className="block font-medium mb-1">Name Ihrer Organisation *</label>
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
                        <label htmlFor="subject" className="block font-medium mb-1">Betreff Ihrer Anfrage *</label>
                        <textarea
                            id="subject"
                            name="subject"
                            rows={4}
                            required
                            value={form.subject}
                            onChange={handleChange}
                            className="input w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block font-medium mb-1">Standort Ihrer Organisation</label>
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
                        <label htmlFor="email" className="block font-medium mb-1">E-Mail-Adresse *</label>
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
                        <label htmlFor="message" className="block font-medium mb-1">Möchten Sie uns noch etwas mitteilen?</label>
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
                        className="primary-button px-6 py-2 text-base font-medium shadow hover:shadow-lg transition"
                    >
                        Abschicken
                    </button>
                </form>
            </div>
        </main>
    );
}
