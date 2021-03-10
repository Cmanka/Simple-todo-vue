import { FirebaseCollection } from '@/constants/collections';
import { Todo } from '@/interfaces/ITodo';
import { firestore } from '@/firebase';

export const getTodoList = (uid: string) =>
  firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get()
    .then(doc => doc.data());

const getCollection = (uid: string) =>
  firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .get();

export const addTodo = async (todo: Todo, uid: string) => {
  const res = await getCollection(uid);
  if (!res.data()) {
    return firestore
      .collection(FirebaseCollection.Todo)
      .doc(uid)
      .set({ todos: [todo] });
  }
  return firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .set({ todos: [...res.data().todos, todo] });
};

export const removeTodo = async (
  todoId: string,
  uid: string
): Promise<void> => {
  const res = await getCollection(uid);
  return firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .update({
      todos: res.data().todos.filter((item: Todo) => item.id !== todoId),
    });
};

export const toggleTodo = async (
  todoId: string,
  uid: string
): Promise<void> => {
  const res = await getCollection(uid);
  return firestore
    .collection(FirebaseCollection.Todo)
    .doc(uid)
    .update({
      todos: res
        .data()
        .todos.map((item: Todo) =>
          item.id === todoId ? { ...item, completed: !item.completed } : item
        ),
    });
};
