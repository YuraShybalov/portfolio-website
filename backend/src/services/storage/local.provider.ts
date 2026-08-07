import fs from 'fs/promises';
import path from 'path';

import { StorageProvider } from './storage.provider';
import { StorageFolder, StorageUploadResult } from './storage.types';

export class LocalProvider implements StorageProvider {
  async upload(file: Express.Multer.File, folder: StorageFolder): Promise<StorageUploadResult> {
    const uploadDir = path.join(process.cwd(), 'uploads', folder);

    await fs.mkdir(uploadDir, { recursive: true });

    const extension = path.extname(file.originalname);

    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}${extension}`;

    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, file.buffer);

    return {
      url: `/uploads/${folder}/${fileName}`,
      publicId: fileName,
    };
  }

  async delete(publicId: string): Promise<void> {
    try {
      const filePath = path.join(process.cwd(), 'uploads', 'profile', publicId);

      await fs.unlink(filePath);
    } catch {
      // якщо файл вже відсутній — нічого не робимо
    }
  }
}
