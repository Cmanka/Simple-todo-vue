import { Post } from '@/interfaces/IPost';

export interface State {
  posts: Post[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  posts: [],
  loading: false,
  error: null,
};
