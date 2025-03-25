import fs from 'fs/promises';

export async function ensureDir(dir: string) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch (err) {
        if ((err as NodeJS.ErrnoException).code !== 'EEXIST') {
            throw err;
        }
    }
}

export async function readJsonArray(filePath: string): Promise<any[]> {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        return JSON.parse(content);
    } catch {
        return []; // falls Datei nicht existiert oder leer
    }
}

export async function writeJsonArray(filePath: string, data: any[]): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}
