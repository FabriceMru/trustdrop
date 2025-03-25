import * as openpgp from 'openpgp';

export async function decryptContent(
    encryptedMessage: string,
    encryptedFile: string | null,
    privateKeyArmored: string,
    passphrase?: string
) {
    try {
        const privateKey = await openpgp.readPrivateKey({
            armoredKey: privateKeyArmored,
            ...(passphrase && { passphrase })
        });

        // Decrypt message
        const message = await openpgp.readMessage({
            armoredMessage: encryptedMessage
        });

        const { data: decryptedMessage } = await openpgp.decrypt({
            message,
            decryptionKeys: privateKey
        });

        // Decrypt file if present
        let decryptedFile = null;
        if (encryptedFile) {
            const fileMessage = await openpgp.readMessage({
                armoredMessage: encryptedFile
            });

            const { data: fileData } = await openpgp.decrypt({
                message: fileMessage,
                decryptionKeys: privateKey
            });

            decryptedFile = fileData;
        }

        return {
            decryptedMessage,
            decryptedFile
        };
    } catch (error) {
        throw new Error('Decryption failed: ' + (error as Error).message);
    }
}