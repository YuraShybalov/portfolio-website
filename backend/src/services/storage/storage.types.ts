export type StorageFolder = 'avatars' | 'projects' | 'certificates' | 'education' | 'blog';

export interface StorageUploadResult {
  url: string;
  publicId: string;
}
