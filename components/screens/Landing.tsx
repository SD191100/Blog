import { getAllPosts } from '@/lib/Posts';
import React from 'react'
import PostHeader from '../ui/PostHeader';
import Link from 'next/link';
import Image from 'next/image';

const Landing = async () => {
  const posts = await getAllPosts();
  return (
    <div className='container max-w-5xl min-h-screen mx-auto'>
      <div>
        <div className='flex justify-between items-end'>

          <h1 className='text-5xl font-bold px-2 sm:text-9xl mb-2 sm:mb-4'>dev.sh</h1>
          <div className='pb-7 flex gap-4'>
            <Link href="https://github.com/sd191100">
              <Image src={`/github.svg`} alt='github' width={40} height={40} />
            </Link>
            <Link href="">
              <Image src={`/discord.svg`} alt='discord' width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/shivam-durgude-490088231/">

              <Image src={`/linkedin.svg`} alt='linkedin' width={40} height={40} />
            </Link>
          </div>
        </div>
        <p className='text-neutral-400 py-4 px-2 text-md sm:text-xl'>A collection of guides and tutorials on web development and devops.</p>
      </div>
      <div className='mt-10'>
        {posts.map(({ title, date, slug }) => (
          //<div key={title} >
          //
          //  <h1>{title}</h1>
          //  <p>{date}</p>
          //
          //</div>
          <PostHeader key={slug} title={title} date={date} slug={slug}  />
        ))}
      </div>
    </div>
  )
}

export default Landing
