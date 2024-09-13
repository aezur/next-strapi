export interface HasId {
  id: number;
}

export interface Dates {
  createdAt: string;
  updatedAt: string;
}

export type Publishable = {
  publishedAt: string;
};

export type StrapiObject = HasId & Dates & Publishable;

export interface Meta {
  pagination?: {
    total: number;
    pages: number;
    page: number;
    limit: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  meta: Meta;
}
