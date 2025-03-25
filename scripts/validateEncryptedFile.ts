// validateEncryptedFile.ts
import * as fs from 'fs';
import * as path from 'path';
import * as openpgp from 'openpgp';

const submissionsPath = path.join(__dirname, '../storage/submissions.json');

async function validateEncryptedFileBase64(entry: any): Promise<boolean> {
    try {
        if (!entry.encryptedFile || typeof entry.encryptedFile !== 'string') return false;

        const binaryData = Uint8Array.from(
            (typeof atob !== 'undefined' ? atob : (str: string) => Buffer.from(str, 'base64').toString('binary'))(entry.encryptedFile),
            c => c.charCodeAt(0)
        );

        await openpgp.readMessage({ binaryMessage: binaryData });
        return true;
    } catch (err) {
        return false;
    }
}

async function run() {
    const raw = fs.readFileSync(submissionsPath, 'utf8');
    const submissions = JSON.parse(raw);

    const results = await Promise.all(
        submissions.map(async (entry: any) => {
            const isValid = await validateEncryptedFileBase64(entry);
            return { id: entry.id, valid: isValid };
        })
    );

    const invalid = results.filter(r => !r.valid);

    if (invalid.length === 0) {
        console.log('✅ Alle Einträge sind valide.');
    } else {
        console.warn(`❌ ${invalid.length} ungültige Einträge gefunden:`);
        for (const entry of invalid) {
            console.warn(`- ID: ${entry.id}`);
        }
    }
}

run();
