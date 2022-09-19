export interface Repository {
  name: string;
  description?: string;
  languages: string[];
  collaborators?: number;
  openPRs: number;
  lastCommit?: Commit;
}

export interface Commit {
  message: string;
  author: string;
  date: string;
}
