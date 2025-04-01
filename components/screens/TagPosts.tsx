import { PostMetadata } from "@/types/Types";
import React from "react";
import PostHeader from "../ui/PostHeader";

const TagPosts = ({ tag, posts }: { tag: string; posts: PostMetadata[] }) => {
  return (
    <div className="container max-w-5xl mx-auto min-h-screen py-6 px-3">
      <div className=" mb-2 sm:mb-12 ">
        <h1 className="text-3xl font-bold sm:text-6xl mb-2 sm:mb-4">{tag}</h1>
        <p className="text-neutral-400 text-lg sm:text-xl">
          Explore the {tag} guides and tutorials.
        </p>
      </div>
      <div className="mt-10">
        {posts.map(({ title, date, slug }) => (
          <PostHeader
            key={slug}
            title={title}
            date={date}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
};

export default TagPosts;
