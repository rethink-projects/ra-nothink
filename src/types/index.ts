import { FieldValue } from "firebase/firestore";

export interface LocationParams {
  pathname: string;
  state: any;
  search: string;
  hash: string;
  key: string;
}

export type TypeProvider = "google" | "github";

export interface ICurrentUser {
  name: string;
  avatarUrl: string;
  email: string;
  type?: TypeProvider;
}

export type TypeCategory = {
  owner_id: string;
  title: string;
  totalLikes: number;
  totalSnippets: number;
  timestamp: FieldValue;
  id?: string;

  // snippet
  likes: number;
};

export type TypeCreateCategory = { owner_id: string; title: string };

export type TypeSnippet = {
  id?: string;
  title: string;
  content: string;
  owner_id: string;
  category_id: string;
  likes: number;
  timestamp: FieldValue;

  //category
  totalLikes: number;
  totalSnippets: number;
};
