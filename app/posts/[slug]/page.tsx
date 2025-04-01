import Posts from "@/components/screens/Posts";
import { getPostBySlug } from "@/lib/Posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post not found | d.sh"
    }
  }
  return {
    title: `${post.title} | d.sh`,
    description: `Explore articles and guides of ${post.title}`,
    openGraph: {
      title: `${post.title} | d.sh`,
      description: `Explore articles and guides of ${post.title}`,
      url: `/tags/${slug}`,
      type: "website"
    }
  }
}


export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <Posts post={post} />
  )
}
