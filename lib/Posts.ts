import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import type { Post, PostMetadata } from "@/types/Types";

const postsDir = path.join(process.cwd(), "posts");

export async function getPostSlugs() {
  return await fs.readdir(postsDir);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDir, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  const processedContent = processImagePaths(content);

  return {
    slug: realSlug,
    title: data.title,
    date: new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }), // ✅ Pre-format the date
    content: processedContent,
    tags: data.tags || [],
  };
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug)),
  );
  return posts
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map(({ slug, title, date, tags }) => ({ slug, title, date, tags }));
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const allPosts = await getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);

  const tagsAndCount: Record<string, number> = {};
  tags.forEach((tag) => {
    tagsAndCount[tag] = (tagsAndCount[tag] || 0) + 1;
  });

  return Object.entries(tagsAndCount).map(([tag, count]) => ({ tag, count }));
}

export async function getPostByTag(tag: string): Promise<PostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts
    .filter((post) => post.tags.includes(tag))
    .map(({ slug, title, date, tags }) => ({ slug, title, tags, date }));
}

export const POSTS_PER_PAGE = 10;

export async function getPaginatedPosts(page: number) {
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  return {
    posts: allPosts.slice(start, end),
    currentPage,
    totalPages,
  };
}

function processImagePaths(content: string): string {
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    if (src.startsWith("http") || src.startsWith("/")) {
      return match;
    }

    return `![${alt}](/images/${src})`;
  });
}
