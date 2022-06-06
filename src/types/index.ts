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

