import { StorageFolder, StorageUploadResult } from './storage.types';

export interface StorageProvider {
  upload(file: Express.Multer.File, folder: StorageFolder): Promise<StorageUploadResult>;

  delete(publicId: string): Promise<void>;
}
