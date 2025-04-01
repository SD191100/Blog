import { Post } from "@/types/Types";
import Link from "next/link";
import React from "react";
import Content from "./Content";




const Posts = ({ post }: { post: Post }) => {
  //console.log(post);
  return (
    <div className="container max-w-5xl mx-auto min-h-screen py-6 px-5">
      <div className="flex gap-3 pb-7">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="bg-neutral-700 py-0.5 px-3 rounded-2xl text-neutral-300 hover:text-white text-xl"
          >
            {tag}
          </Link>
        ))}
      </div>
      <h1 className="text-6xl font-bold px-2 mb-5">{post.title}</h1>
      <p className="text-xl text-neutral-400 mx-3">{post.date}</p>
      <div className="my-14 px-5">
        <Content content={post.content} />
      </div>
    </div>
  );
};

export default Posts;

