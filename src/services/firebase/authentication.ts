import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  Auth,
  signInWithPopup,
} from "firebase/auth";

import { TypeProvider, ICurrentUser } from "../../types";

// função que identifica qual dos dois providers
const getProvider = (
  type: TypeProvider
): GoogleAuthProvider | GithubAuthProvider => {
  return type === "google"
    ? new GoogleAuthProvider()
    : new GithubAuthProvider();
};

// Promise - aguarda alguma coisa quando a requisição é feita (no caso, aguarda as informações do usuário <ICurrentUser>)
const signinWithProvider = async (
  auth: Auth,
  provider: GoogleAuthProvider | GithubAuthProvider
): Promise<ICurrentUser> => {
  try {
    const response = await signInWithPopup(auth, provider);
    const currentUser: ICurrentUser = {
      avatarUrl: response.user.photoURL!,
      name: response.user.displayName!,
      email: response.user.email!,
    };
    return currentUser;
  } catch (error: any) {
    return error;
  }
};

// funçao que vai ser passada para o authProvider e executada junto com a chamada do login que traz o usuario
export const loginWithFirebase = async (type: TypeProvider) => {
  const auth = getAuth();
  const provider = getProvider(type);
  return signinWithProvider(auth, provider);
};
