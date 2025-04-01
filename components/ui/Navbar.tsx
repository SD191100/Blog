import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white py-1 sm:py-5'>
      <div className='flex container mx-auto max-w-5xl h-20 px-4'>
        <div className='flex items-center justify-between w-full'>
          <Link href={'/'} className='flex items-center' >
            <Image src={'/logo/svg/logo-no-background.svg'} alt='d.sh logo' width={85} height={85} />
          </Link>
          <div className='flex items-center justify-center gap-10 text-lg text-text-secondary' >
            <Link className='hover:text-white text-neutral-400' href={'/'}>Home</Link>
            <Link className='hover:text-white text-neutral-400' href={'/tags'}>Explore</Link>

            <Link className='hover:text-white text-neutral-400' href='https://github.com/sd191100'>
            <Image src={`/globe.svg`} alt='github' width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
