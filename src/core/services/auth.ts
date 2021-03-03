import { FirebaseCollection } from '../constants/collections';
import { auth, firestore } from '../firebase/index';
import { User } from '../interfaces/IUser';

export const login = (login: string, password: string) => {
  return auth
    .signInWithEmailAndPassword(login, password)
    .then(({ user }) => user?.uid);
};

export const register = ({
  email,
  password,
  firstName,
  lastName,
}: any): Promise<User> => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const newUser: Omit<User, 'uid'> = {
        email,
        firstName,
        lastName,
      };
      return firestore
        .collection(FirebaseCollection.Users)
        .doc(user.uid)
        .set(newUser)
        .then(() =>
          user.getIdTokenResult().then(() => ({
            ...newUser,
            uid: user.uid,
          }))
        );
    });
};

export const logout = (): Promise<void> => auth.signOut();
