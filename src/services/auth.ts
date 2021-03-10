import { FirebaseCollection } from '@/constants/collections';
import { auth, firestore } from '@/firebase/index';
import { User } from '@/interfaces/IUser';

export const login = (data: { email: string; password: string }) => {
  return auth
    .signInWithEmailAndPassword(data.email, data.password)
    .then(({ user }) => user?.uid);
};

export const register = (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}): Promise<User> => {
  return auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(({ user }) => {
      const newUser: Omit<User, 'uid'> = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
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
