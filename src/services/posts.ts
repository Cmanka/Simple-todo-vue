import { FirebaseCollection } from '@/constants/collections';
import { firestore } from '@/firebase';
import { Comment } from '@/interfaces/IComment';
import { Post } from '@/interfaces/IPost';

export const fetchPosts = () =>
  firestore
    .collection(FirebaseCollection.Posts)
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()));

export const addPost = (post: Post) =>
  firestore
    .collection(FirebaseCollection.Posts)
    .doc(post.id)
    .set({ ...post });

export const removePost = (postId: string) =>
  firestore
    .collection(FirebaseCollection.Posts)
    .doc(postId)
    .delete();

export const addComment = async (postId: string, comment: Comment) => {
  const post = await (
    await firestore
      .collection(FirebaseCollection.Posts)
      .doc(postId)
      .get()
  ).data();
  return firestore
    .collection(FirebaseCollection.Posts)
    .doc(postId)
    .update({ ...post, comments: [...post.comments, comment] });
};

export const removeComment = async (postId: string, commentId: string) => {
  const post = await (
    await firestore
      .collection(FirebaseCollection.Posts)
      .doc(postId)
      .get()
  ).data();
  return firestore
    .collection(FirebaseCollection.Posts)
    .doc(postId)
    .update({
      ...post,
      comments: post.comments.filter(
        (comment: Comment) => comment.id !== commentId
      ),
    });
};
