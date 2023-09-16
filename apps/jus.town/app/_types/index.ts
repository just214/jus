type Album = {
  title: string;
  cover_large: string;
  cover_small: string;
  description: string;
  tags: string[];
};

type SharedFields = {
  id: string;
  title: string;
  link: string;
  tags?: string[];
  description?: string;
};

export interface Track extends SharedFields {
  artists: string[];
  album: Album;
  trackNumber: number;
}

export interface Video extends SharedFields {
  private?: boolean;
  thumbnail?: string;
}

export interface Code extends SharedFields {
  websiteLink?: string;
  githubLink?: string;
  npmLink?: string;
  thumbnail?: string;
}

export type FamilyTreeItem = {
  first_name: string;
  last_name: string;
  birth_date: string;
  death_date: string;
  birth_place: string;
  death_place: string;
  spouse: string;
  children: string[];
  parents: string[];
  siblings: string[];
};
