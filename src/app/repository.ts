export interface Repository {
  name: string;
  description?: string;
  languages: string[];
  collaborators?: number;
  openPRs: number;
  lastCommit?: Object;
}
