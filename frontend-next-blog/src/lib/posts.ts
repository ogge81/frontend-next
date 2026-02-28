import posts from '../data/blog_posts.json';
import { remark } from 'remark';
import html from 'remark-html';

export type Post = {
    id: number
    title: string
    slug: string
    excerpt: string
    content_md: string
    status: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export function getAllPosts(): Post[] {
    return [...(posts as Post[])].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
export function getPostBySlug(slug: string): Post | undefined {
    return (posts as unknown as Post[]).find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
    return (posts as unknown as Post[]).map((p) => p.slug);
}

export async function markdownToHtml(markdown: string): Promise<string> {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}