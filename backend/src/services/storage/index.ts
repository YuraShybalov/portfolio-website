import { StorageService } from './storage.service';
import { LocalProvider } from './local.provider';

const provider = new LocalProvider();

export const storageService = new StorageService(provider);
