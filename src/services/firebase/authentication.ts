//vídeo 10 Nothink
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  Auth,
  signInWithPopup,
} from "firebase/auth";

import { TypeProvider, ICurrentUser } from "../../types";

const getProvider = (
  type: TypeProvider
): GoogleAuthProvider | GithubAuthProvider => {
  return type === "google"
    ? new GoogleAuthProvider()
    : new GithubAuthProvider();
};

const signinWithProvider = async (
  auth: Auth,
  provider: GoogleAuthProvider | GithubAuthProvider
): Promise<ICurrentUser> => {
  try {
    const response = await signInWithPopup(auth, provider);
    const currentUser: ICurrentUser = {
      avatarUrl: response.user.photoURL!,
      email: response.user.email!,
      name: response.user.displayName!,
    };
    return currentUser;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export const loginWithFirebase = async (type: TypeProvider) => {
  const auth = getAuth();
  const provider = getProvider(type);
  return signinWithProvider(auth, provider);
};
