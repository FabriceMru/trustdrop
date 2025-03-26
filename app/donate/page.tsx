'use client';

import { useState } from 'react';
import { CreditCard, Banknote, EuroIcon } from 'lucide-react';
import TrustDropHighlight from '@/components/TrustDropHighlight';

export default function DonatePage() {
    const [amount, setAmount] = useState('100');
    const [customAmount, setCustomAmount] = useState('');
    const [frequency, setFrequency] = useState('monthly');
    const [newsletter, setNewsletter] = useState(true);

    const amounts = ['5000', '1000', '500', '250', '100', '50', '25', 'other'];

    const handleDonate = (method: string) => {
        alert(`Spende über ${amount === 'other' ? customAmount : amount} € (${frequency}) via ${method}`);
        // TODO: Hier kannst du Stripe, PayPal oder Überweisungs-Flow starten
    };

    return (
        <main className="min-h-screen gradient-bg py-20 px-6 text-white">
            <div className="max-w-4xl mx-auto feature-card p-8 shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Unterstütze <TrustDropHighlight /></h1>
                <p className="mb-8 text-gray-300">
                    Deine Spende hilft dabei, Whistleblower und anonyme Hinweise sicher zu ermöglichen.
                </p>

                {/* Betrag wählen */}
                <h2 className="text-lg font-semibold mb-2">Wähle deinen Spendenbetrag:</h2>
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {amounts.map((amt) => (
                        <button
                            key={amt}
                            onClick={() => setAmount(amt)}
                            className={`py-3 px-4 border text-sm rounded ${
                                amount === amt ? 'bg-emerald-500 text-gray-900' : 'border-gray-700 text-gray-300'
                            }`}
                        >
                            {amt === 'other' ? 'Andere' : `${amt} €`}
                        </button>
                    ))}
                </div>
                {amount === 'other' && (
                    <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Benutzerdefinierter Betrag"
                        className="w-full mb-6 px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded"
                    />
                )}

                {/* Spendenintervall */}
                <h2 className="text-lg font-semibold mb-2">Spendenhäufigkeit:</h2>
                <div className="flex space-x-4 mb-6">
                    {['once', 'monthly', 'yearly'].map((freq) => (
                        <button
                            key={freq}
                            onClick={() => setFrequency(freq)}
                            className={`py-2 px-4 text-sm rounded ${
                                frequency === freq ? 'bg-emerald-500 text-gray-900' : 'border border-gray-700 text-gray-300'
                            }`}
                        >
                            {freq === 'once' ? 'Einmalig' : freq === 'monthly' ? 'Monatlich' : 'Jährlich'}
                        </button>
                    ))}
                </div>

                {/* Checkbox */}
                <label className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="mr-2"
                    />
                    <span className="text-sm text-gray-400">Halte mich über Neuigkeiten auf dem Laufenden</span>
                </label>

                {/* Zahlungsoptionen */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <button
                        onClick={() => handleDonate('Kreditkarte')}
                        className="primary-button w-full flex items-center justify-center"
                    >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Mit Kreditkarte spenden
                    </button>
                    <button
                        onClick={() => handleDonate('PayPal')}
                        className="primary-button w-full flex items-center justify-center"
                    >
                        <EuroIcon className="mr-2 h-5 w-5" />
                        Mit PayPal spenden
                    </button>
                    <button
                        onClick={() => handleDonate('Überweisung')}
                        className="primary-button w-full flex items-center justify-center"
                    >
                        <Banknote className="mr-2 h-5 w-5" />
                        Per Überweisung spenden
                    </button>
                </div>

                {/* Bankdaten anzeigen (statisch oder dynamisch) */}
                <div className="bg-gray-900 border border-gray-700 p-4 rounded text-sm">
                    <p className="text-emerald-400 font-semibold mb-2">Bankverbindung für Überweisung:</p>
                    <p className="text-gray-300">Kontoinhaber: <TrustDropHighlight /> UG (geplant)</p>
                    <p className="text-gray-300">IBAN: DE12 3456 7890 1234 5678 90</p>
                    <p className="text-gray-300">Verwendungszweck: Spende <TrustDropHighlight /></p>
                </div>
            </div>
        </main>
    );
}
