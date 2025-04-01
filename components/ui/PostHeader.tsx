import Link from 'next/link';
import React from 'react'

const PostHeader = ({ title, date, slug, tags }: { title: string; date: string; slug: string, tags: string[] }) => {

  return (
    <div className=''>

      <div className="divide-neutral-600 divide-y" >
        <Link href={`/posts/${slug}`} className=''>
          <div className='hover:text-white flex flex-col group items-start justify-between py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors ' >
            <span className='text-white' >{title}</span>
            <span className="" >{new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </Link>
      </div>
      <div className='border-b border-gray-500 my-3 mx-1'></div>
    </div>
  )
}

export default PostHeader
