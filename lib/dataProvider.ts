import type { StorageMode } from "./types";

export type DataProviderResult<T> = {
  data: T | null;
  error?: string;
};

export interface DataProvider {
  mode: StorageMode;
  create<T>(collection: string, payload: T): Promise<DataProviderResult<T>>;
  read<T>(collection: string, id: string): Promise<DataProviderResult<T>>;
  update<T>(collection: string, id: string, payload: Partial<T>): Promise<DataProviderResult<T>>;
  delete(collection: string, id: string): Promise<DataProviderResult<boolean>>;
  list<T>(collection: string): Promise<DataProviderResult<T[]>>;
  sync(): Promise<DataProviderResult<boolean>>;
  exportData(): Promise<DataProviderResult<Blob>>;
  importData(file: File): Promise<DataProviderResult<boolean>>;
  backupData(): Promise<DataProviderResult<boolean>>;
  restoreData(backupId: string): Promise<DataProviderResult<boolean>>;
}

export class LocalDataProvider implements DataProvider {
  mode: StorageMode = "local";

  async create<T>(_collection: string, payload: T) {
    return { data: payload };
  }

  async read<T>(_collection: string, _id: string) {
    return { data: null as T | null, error: "Local read not implemented yet" };
  }

  async update<T>(_collection: string, _id: string, payload: Partial<T>) {
    return { data: payload as T };
  }

  async delete(_collection: string, _id: string) {
    return { data: true };
  }

  async list<T>(_collection: string) {
    return { data: [] as T[] };
  }

  async sync() {
    return { data: true };
  }

  async exportData() {
    return { data: new Blob(["{}"], { type: "application/json" }) };
  }

  async importData(_file: File) {
    return { data: true };
  }

  async backupData() {
    return { data: true };
  }

  async restoreData(_backupId: string) {
    return { data: true };
  }
}

export function createDataProvider(mode: StorageMode): DataProvider {
  return new LocalDataProvider();
}
