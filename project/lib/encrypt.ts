import * as openpgp from 'openpgp';

export async function encryptContent(message: string, file?: File, publicKeyArmored: string) {
    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

    const encryptedMessage = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: message }),
        encryptionKeys: publicKey,
    });

    let encryptedFile: string | null = null;
    if (file) {
        const buffer = await file.arrayBuffer();
        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ binary: new Uint8Array(buffer) }),
            encryptionKeys: publicKey,
        });
        encryptedFile = encrypted;
    }

    return { encryptedMessage, encryptedFile };
}