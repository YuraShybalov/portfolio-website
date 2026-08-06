import { StorageProvider } from './storage.provider';
import { StorageFolder, StorageUploadResult } from './storage.types';

export class StorageService {
  constructor(private readonly provider: StorageProvider) {}

  upload(file: Express.Multer.File, folder: StorageFolder): Promise<StorageUploadResult> {
    return this.provider.upload(file, folder);
  }

  delete(publicId: string): Promise<void> {
    return this.provider.delete(publicId);
  }
}
