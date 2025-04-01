import Link from "next/link";
import React from "react";

const Tag = ({ tag, count, link }: { tag: string; count?: number; link?: string }) => {
  return (
    //<Link className='text-neutral-400 bg-neutral-800 w-full text-sm sm:w-auto px-3 py-1.5 mr-2 mb-2 rounded-md hover:text-black hover:bg-neutral-400 ' href={`/tags/${tag}`} >{tag} {count}</Link>

    <Link
      href={link?`/`:`/tags/${tag}`}
      className="text-neutral-400 bg-neutral-800 w-full text-sm sm:w-auto px-3 py-2 mr-2 mb-2 rounded-md hover:text-black hover:bg-neutral-400"
    >
      <div className="flex justify-between items-center gap-2">
        <span>{tag}</span>
        <span className="">{count}</span>
      </div>
    </Link>
  );
};

export default Tag;
