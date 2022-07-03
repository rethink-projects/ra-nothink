import { FieldValue } from "firebase/firestore";

export type TypeProvider = "google" | "github";

export interface ICurrentUser {
  name: string;
  avatarUrl: string;
  email: string;
  type?: string;
}

export type TypeCategory = {
  id?: string;
  owner_id: string;
  title: string;
  totalLikes?: number;
  totalSnnipets?: number;
  timestamp: FieldValue;
  likes?:string[];
};

export type TypeCreateCategory = { owner_id: string; title: string };

export type TypeSnnipet = {
  id?: string;
  title: string;
  content: string;
  owner_id: string;
  category_id: string;
  likes: string[];
  timestamp: FieldValue;
  totalLikes?: number;
  totalSnnipets?: number;
};
