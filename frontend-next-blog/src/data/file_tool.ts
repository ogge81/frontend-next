import { promises as fs } from 'fs';
import path from 'path';

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content_md: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

const BLOG_POSTS_PATH = path.join(process.cwd(), 'src/data/blog_posts.json');

async function readPosts(): Promise<BlogPost[]> {
  const data = await fs.readFile(BLOG_POSTS_PATH, 'utf-8');
  return JSON.parse(data);
}

async function writePosts(posts: BlogPost[]): Promise<void> {
  await fs.writeFile(
    BLOG_POSTS_PATH,
    JSON.stringify(posts, null, 0),
    'utf-8'
  );
}

function getNextId(posts: BlogPost[]): number {
  const maxId = posts.reduce((max, p) => Math.max(max, p.id), 0);
  return maxId + 1;
}

function toIsoDate(): string {
  return new Date().toISOString();
}

export type AddPostInput = {
  title: string;
  slug: string;
  excerpt: string;
  content_md: string;
  status?: string;
};

/**
 * Add a new post to blog_posts.json.
 * Generates id, createdAt, updatedAt, and publishedAt (if status is PUBLISHED).
 */
export async function addPost(input: AddPostInput): Promise<BlogPost> {
  const posts = await readPosts();
  const now = toIsoDate();
  const id = getNextId(posts);
  const status = input.status ?? 'DRAFT';

  const post: BlogPost = {
    id,
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt,
    content_md: input.content_md,
    status,
    createdAt: now,
    updatedAt: now,
    publishedAt: status === 'PUBLISHED' ? now : null,
  };

  posts.push(post);
  await writePosts(posts);
  return post;
}

export type UpdatePostInput = Partial<
  Pick<BlogPost, 'title' | 'slug' | 'excerpt' | 'content_md' | 'status'>
>;

/**
 * Update an existing post by id or slug.
 * Updates updatedAt. Sets publishedAt when status changes to PUBLISHED.
 */
export async function updatePost(
  idOrSlug: number | string,
  updates: UpdatePostInput
): Promise<BlogPost | null> {
  const posts = await readPosts();
  const index = posts.findIndex(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );

  if (index === -1) return null;

  const existing = posts[index];
  const now = toIsoDate();

  const updated: BlogPost = {
    ...existing,
    ...updates,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: now,
    publishedAt:
      updates.status === 'PUBLISHED' && existing.status !== 'PUBLISHED'
        ? now
        : updates.status === 'DRAFT'
          ? null
          : existing.publishedAt,
  };

  posts[index] = updated;
  await writePosts(posts);
  return updated;
}

/**
 * Delete a post by id or slug.
 */
export async function deletePost(idOrSlug: number | string): Promise<boolean> {
  const posts = await readPosts();
  const index = posts.findIndex(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );

  if (index === -1) return false;

  posts.splice(index, 1);
  await writePosts(posts);
  return true;
}
