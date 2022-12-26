export interface iUserContext {
  listProjects: iProject[];
  setListProjects(data: iProject[]): void;
}

export interface iChildren {
  children: React.ReactNode;
}

export interface iProject {
  name: string;
  html_url: string;
  language: string;
  description: string;
}
