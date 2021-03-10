import { Comment } from '@/interfaces/IComment';
import { Post } from '@/interfaces/IPost';
import {
  addComment,
  addPost,
  fetchPosts,
  removeComment,
  removePost,
} from '@/services/posts';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  fetchPosts = 'fetchPosts',
  addPost = 'addPost',
  removePost = 'removePost',
  addComment = 'addComment',
  removeComment = 'removeComment',
}

export default {
  async [ActionTypes.fetchPosts]({ commit }: any) {
    commit(MutationTypes.updatePosts);
    try {
      const posts = await fetchPosts();
      commit(MutationTypes.updatePostsSuccess, { posts });
    } catch (e) {
      commit(MutationTypes.updatePostsFailed, e.message);
    }
  },
  async [ActionTypes.addPost]({ commit }: any, payload: { post: Post }) {
    commit(MutationTypes.addPost);
    try {
      await addPost(payload.post);
      commit(MutationTypes.addPostSuccess, payload);
    } catch (e) {
      commit(MutationTypes.addPostFailed, { error: e.message });
    }
  },
  async [ActionTypes.removePost]({ commit }: any, payload: { postId: string }) {
    commit(MutationTypes.removePost);
    try {
      await removePost(payload.postId);
      commit(MutationTypes.removePostSuccess, payload);
    } catch (e) {
      commit(MutationTypes.removePostFailed, { error: e.message });
    }
  },
  async [ActionTypes.addComment](
    { commit }: any,
    payload: { postId: string; comment: Comment }
  ) {
    commit(MutationTypes.addComment);
    try {
      await addComment(payload.postId, payload.comment);
      commit(MutationTypes.addCommentSuccess, payload);
    } catch (e) {
      commit(MutationTypes.addCommentFailed, { error: e.message });
    }
  },
  async [ActionTypes.removeComment](
    { commit }: any,
    payload: { postId: string; commentId: string }
  ) {
    commit(MutationTypes.removeComment);
    try {
      await removeComment(payload.postId, payload.commentId);
      commit(MutationTypes.removeCommentSuccess, payload);
    } catch (e) {
      commit(MutationTypes.removeCommentFailed, { error: e.message });
    }
  },
};
