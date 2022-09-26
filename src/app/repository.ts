export interface Repository {
  name: string;
  description?: string;
  url?: string;
  languages?: string;
  primaryLanguage?: string;
  watchers?: any;
  openPRs?: number;
  issues?: number;
  createdAt?: string;
  lastUpdated?: string;
  lastPR?: {
    title: string;
    account: string;
    reviews: number;
    date: string;
  }
  lastCommit?: {
    message: string;
    author: string;
    date: string;
  };
}
