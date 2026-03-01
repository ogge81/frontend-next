'use server';

import {
  updatePost,
  addPost,
  deletePost,
  type UpdatePostInput,
  type AddPostInput,
} from '@/src/data/file_tool';

export async function updatePostAction(
  idOrSlug: number | string,
  updates: UpdatePostInput
) {
  return updatePost(idOrSlug, updates);
}

export async function addPostAction(input: AddPostInput) {
  return addPost(input);
}

export async function deletePostAction(idOrSlug: number | string) {
  return deletePost(idOrSlug);
}
