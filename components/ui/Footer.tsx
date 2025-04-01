import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-white sm:py-5 h-30'>
      <div className='container max-w-5xl mx-auto'>
        <div className="flex items-center justify-center font-medium text-lg">
          <div className='flex flex-col items-center'>
            <div className='text-neutral-400'> made with -`♡´- by {" "}
              <Link href={`https://github.com/sd191100`}>
                <span className='text-teal-500'>SD191100</span>
              </Link>
            </div>
            <div className='text-neutral-400'>&copy; all rights reserved </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
