import fs from 'fs/promises';
import path from 'path';

async function readJson(filePath) {
    try {
        const jsonData = await fs.readFile(path.resolve(filePath), { encoding: 'utf8' });
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Failed to read json file: ', error);
    }
}

export { readJson };