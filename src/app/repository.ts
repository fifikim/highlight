export interface Repository {
  name: string;
  description: string | null;
  languages: string[];
  collaborators: number | null;
  openPRs: number;
  lastCommit: Commit | null;
}

export interface Commit {
  message: string;
  author: string;
  date: string;
}