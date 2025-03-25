import * as openpgp from 'openpgp';

export async function encryptContent(message: string, file?: File, publicKeyArmored: string) {
    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

    // 📨 Textnachricht verschlüsseln (armored)
    const encryptedMessage = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: message }),
        encryptionKeys: publicKey,
        format: 'armored',
    });

    // 📁 Datei verschlüsseln (binary → base64)
    let encryptedFile: string | null = null;

    if (file) {
        const buffer = await file.arrayBuffer();

        const binaryMessage = await openpgp.createMessage({
            binary: new Uint8Array(buffer),
        });

        const encryptedBinary = await openpgp.encrypt({
            message: binaryMessage,
            encryptionKeys: publicKey,
            format: 'binary', // kein armored!
        });

        // Base64 für JSON-Speicherung
        encryptedFile = Buffer.from(encryptedBinary as Uint8Array).toString('base64');
    }

    return {
        encryptedMessage,      // armored (String)
        encryptedFile: encryptedFile || null, // base64 oder null
    };
}
