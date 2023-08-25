export interface IPartner {
  createdAt: Date;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients: Array<string | number>;
  projects: string[];
  id: string;
}
