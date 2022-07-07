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

// Categories

export type TypeCategory = {
  id?: string;
  owner_id: string;
  title: string;
  totalLikes?: number;
  totalSnippets?: number;
  timestamp: FieldValue;

  likes?: string[];
  content?: string;
  category_id?: string;
};

export type TypeCreateCategory = { owner_id: string; title: string };

export type TypeSnippet = {
  id?: string;
  title: string;
  content: string;
  owner_id: string;
  category_id: string;
  likes: string[];
  timestamp: FieldValue;
};
