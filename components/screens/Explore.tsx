import { getAllPosts, getAllTags, getPostByTag } from "@/lib/Posts";
import React from "react";
import Tag from "../ui/Tag";

const Explore = async () => {
  const tags = await getAllTags();
  const cheatSheet = await getPostByTag("cheatsheet")
  const totalPosts = await getAllPosts();
  const postCount = totalPosts.length;
  
  return (
    <div className="container max-w-5xl mx-auto min-h-screen py-6 px-3">
      <div className=" mb-2 sm:mb-12 ">
        <h1 className="text-3xl font-bold sm:text-6xl mb-2 sm:mb-4">Explore</h1>
        <p className="text-neutral-400 text-lg sm:text-xl">
          Navigate your way through the guides and tutorials.
        </p>
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-1">GUIDES BY TAGS</p>
        <div className="flex pt-3 mb-16 px-1 flex-wrap max-w-[100%]">
          <Tag tag="All" count={postCount} link="/" />
          {tags.map(({ tag, count }: { tag: string; count: number }) => (
            <Tag key={tag} tag={tag} count={count} />
          ))}
        </div>
        <p className="text-xs text-neutral-500 mb-1">CHEATSHEETS</p>
        <div className="flex pt-3 mb-16 px-1 flex-wrap max-w-[100%]">
          {cheatSheet.map((post) => (
            <Tag key={post.title} tag={post.title} link={`/posts/${post.slug}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;

/*
       <div>
        <h1 className="text-5xl font-bold sm:text-7xl mb-2 sm:mb-4">
          {" "}
          Explore{" "}
        </h1>
        <p>Navigate your way through the guides and tutorials.</p>
      </div>

 
 */
