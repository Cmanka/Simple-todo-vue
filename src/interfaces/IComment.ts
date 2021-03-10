import { User } from './IUser';

export interface Comment {
  id: string;
  text: string;
  dateCreated: string;
  user: User;
}
