import { User } from '@/interfaces/IUser';

export interface State {
  data: User;
  loading: boolean;
  error: string;
  avatar: string;
  avatarLoading: boolean;
}

export const initialState: State = {
  data: null,
  loading: false,
  error: null,
  avatar: null,
  avatarLoading: false,
};
