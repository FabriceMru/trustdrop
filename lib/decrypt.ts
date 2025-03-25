import * as openpgp from 'openpgp';

// ✅ Kompatibel für Browser UND Node.js
function base64ToUint8Array(base64: string): Uint8Array {
    if (typeof atob === 'function') {
        // Browser
        const binaryStr = atob(base64);
        return Uint8Array.from(binaryStr, c => c.charCodeAt(0));
    } else {
        // Node.js
        return new Uint8Array(Buffer.from(base64, 'base64'));
    }
}

export async function decryptContent(
    encryptedMessage: string,
    encryptedFile: string | null,
    privateKeyArmored: string,
    passphrase?: string
): Promise<{ decryptedMessage: string; decryptedFile?: Uint8Array }> {
    try {
        // 🔑 Privaten Schlüssel einlesen und ggf. entschlüsseln
        const privateKey = await openpgp.readPrivateKey({ armoredKey: privateKeyArmored });
        const decryptedKey = await openpgp.decryptKey({
            privateKey,
            passphrase,
        });

        // 📨 Nachricht entschlüsseln (TEXT)
        const message = await openpgp.readMessage({ armoredMessage: encryptedMessage });
        const { data: decryptedMessage } = await openpgp.decrypt({
            message,
            decryptionKeys: decryptedKey,
        });

        let decryptedFile: Uint8Array | undefined;

        // 📁 Datei entschlüsseln (nur wenn base64 encoded binary vorhanden ist)
        if (
            typeof encryptedFile === 'string' &&
            encryptedFile.trim() !== '' &&
            !encryptedFile.includes('-----BEGIN') // KEIN armored Block!
        ) {
            try {
                const binaryData = base64ToUint8Array(encryptedFile);

                const fileMessage = await openpgp.readMessage({ binaryMessage: binaryData });

                const fileDecryption = await openpgp.decrypt({
                    message: fileMessage,
                    decryptionKeys: decryptedKey,
                    format: 'binary', // ⚠️ ganz wichtig!
                });

                decryptedFile = fileDecryption.data as Uint8Array;
                console.log('✅ Datei erfolgreich entschlüsselt:', decryptedFile);
            } catch (fileError) {
                console.warn('⚠️ Datei konnte nicht entschlüsselt werden:', fileError);
            }
        }

        return {
            decryptedMessage,
            decryptedFile,
        };
    } catch (error) {
        console.error('❌ Fehler bei Entschlüsselung:', error);
        throw error;
    }
}
