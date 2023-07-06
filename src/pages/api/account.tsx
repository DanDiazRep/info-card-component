import { type NextApiRequest, type NextApiResponse } from 'next';
import { type AccountResponse } from '~/types/types';
import fs from 'fs';
import path from 'path';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AccountResponse>
): Promise<void> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'mockAccount.json');
        const jsonData = await fs.promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData) as AccountResponse;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error',
            account: null,
            id: '500',
        });
    }
}
