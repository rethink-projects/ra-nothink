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
  totalLikes: number;
  totalSnnipets: number;
  timeStamp: FieldValue;
};

export type TypeCreateCategory = { owner_id: string; title: string };
