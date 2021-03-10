import { User } from '@/interfaces/IUser';
import { FirebaseCollection } from '@/constants/collections';
import firebase, { auth, firestore } from '@/firebase';
import 'firebase/storage';

export const getUser = (userId: string): Promise<User> =>
  firestore
    .collection(FirebaseCollection.Users)
    .doc(userId)
    .get()
    .then(snapshot => snapshot.data() as User)
    .then(data => ({
      ...data,
      uid: userId,
    }));

export const updateUser = ({ firstName, lastName }: User): Promise<void> =>
  firestore
    .collection(FirebaseCollection.Users)
    .doc(auth.currentUser.uid)
    .update({ firstName, lastName });

export const getUserAvatar = (uid: string): Promise<string> =>
  firebase
    .storage()
    .ref(`user/${uid}/profile-picture`)
    .getDownloadURL();

export const updateUserAvatar = (
  uid: string,
  file: File
): firebase.storage.UploadTask =>
  firebase
    .storage()
    .ref(`user/${uid}/profile-picture`)
    .put(file);
