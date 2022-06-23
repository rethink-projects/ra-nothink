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
  id?: string;
  owner_id: string;
  title: string;
  totalLikes: number;
  totalSnnipets: number;
  timestamp: FieldValue;
};

export type TypeCreateCategory = { owner_id: string; title: string };
