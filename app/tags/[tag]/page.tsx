import TagPosts from "@/components/screens/TagPosts";
import { getPostByTag } from "@/lib/Posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
type tParams = Promise<{ tag: string }>;

export async function generateMetadata(props: { params: tParams}): Promise<Metadata> {
  const { tag } = await props.params;
  return {
    title: `${tag} | d.sh`,
    description: `Explore articles and guides of ${tag}`,
    openGraph: {
      title: `${tag} | d.sh`,
      description: `Explore articles and guides of ${tag}`,
      url: `/tags/${tag}`,
      type: "website"
    }
  }
}

export default async function TagPage(props: { params: tParams}) {
  const { tag } = await props.params;
  const posts = await getPostByTag(tag);
  if (!posts.length) return notFound;

  return (
    <main className="p-6">
      <TagPosts tag={tag} posts={posts} />
    </main>
  );
}
