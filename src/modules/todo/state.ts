import { Todo } from '@/interfaces/ITodo';

export interface State {
  todos: Todo[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  todos: [],
  loading: false,
  error: '',
};
