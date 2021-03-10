import { Comment } from './IComment';
import { User } from './IUser';

export interface Post {
  id: string;
  title: string;
  text: string;
  dateCreated: string;
  user: User;
  comments: Comment[];
}
