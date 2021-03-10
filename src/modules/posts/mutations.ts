import { Comment } from '@/interfaces/IComment';
import { Post } from '@/interfaces/IPost';
import { State } from './state';

export enum MutationTypes {
  updatePosts = 'updatePosts',
  updatePostsSuccess = 'updatePostsSuccess',
  updatePostsFailed = 'updatePostsFailed',
  addPost = 'addPost',
  addPostSuccess = 'addPostSuccess',
  addPostFailed = 'addPostFailed',
  removePost = 'removePost',
  removePostSuccess = 'removePostSuccess',
  removePostFailed = 'removePostFailed',
  addComment = 'addComment',
  addCommentSuccess = 'addCommentSuccess',
  addCommentFailed = 'addCommentFailed',
  removeComment = 'removeComment',
  removeCommentSuccess = 'removeCommentSuccess',
  removeCommentFailed = 'removeCommentFailed',
}

export default {
  [MutationTypes.updatePosts](state: State) {
    state.loading = true;
  },
  [MutationTypes.updatePostsSuccess](state: State, payload: { posts: Post[] }) {
    state.loading = false;
    state.posts = payload.posts;
  },
  [MutationTypes.updatePostsFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.addPost](state: State) {
    state.loading = true;
  },
  [MutationTypes.addPostSuccess](state: State, payload: { post: Post }) {
    state.loading = false;
    state.posts = [...state.posts, payload.post];
  },
  [MutationTypes.addPostFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.removePost](state: State) {
    state.loading = true;
  },
  [MutationTypes.removePostSuccess](state: State, payload: { postId: string }) {
    state.loading = false;
    state.posts = state.posts.filter(
      (post: Post) => post.id !== payload.postId
    );
  },
  [MutationTypes.removePostFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.addComment](state: State) {
    state.loading = true;
  },
  [MutationTypes.addCommentSuccess](
    state: State,
    payload: { postId: string; comment: Comment }
  ) {
    state.loading = false;
    const post = state.posts.find(post => post.id === payload.postId);
    post.comments = [...post.comments, payload.comment];
  },
  [MutationTypes.addCommentFailed](state: State, payload: { error: string }) {
    state.loading = false;
    state.error = payload.error;
  },
  [MutationTypes.removeComment](state: State) {
    state.loading = true;
  },
  [MutationTypes.removeCommentSuccess](
    state: State,
    payload: { postId: string; commentId: string }
  ) {
    state.loading = false;
    const post = state.posts.find(post => post.id === payload.postId);
    post.comments = post.comments.filter(
      (comment: Comment) => comment.id !== payload.commentId
    );
  },
  [MutationTypes.removeCommentFailed](
    state: State,
    payload: { error: string }
  ) {
    state.loading = false;
    state.error = payload.error;
  },
};
