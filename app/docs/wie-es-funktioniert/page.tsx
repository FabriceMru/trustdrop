export default function WieEsFunktioniert() {
    return (
        <div className="prose prose-invert max-w-3xl">
            <h1>Wie funktioniert TrustDrop?</h1>
            <ol>
                <li>Die Hinweisgeber rufen das TrustDrop-Formular im Browser auf.</li>
                <li>Ihre Nachricht wird clientseitig (im Browser) verschlüsselt.</li>
                <li>Optional können sie Dateien hochladen – auch diese werden verschlüsselt.</li>
                <li>Empfänger entschlüsseln die Nachricht lokal mit ihrem privaten Schlüssel.</li>
            </ol>
        </div>
    );
}
