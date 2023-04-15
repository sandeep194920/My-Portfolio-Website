import Image from 'next/image'
import React from 'react'

interface Props {
  lastUpdated: string
}
function PostDetails({ lastUpdated }: Props) {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src="/png/my_profile_pic.png"
        className="my-4 rounded-full"
        width={54}
        height={54}
        alt="Sandeep Amarnath"
      />
      <div className="flex h-fit space-x-1 text-xs">
        <p className="font-semibold">By Sandeep Amarnath</p>
        <p>|</p>
        <p>Last updated - {lastUpdated} </p>
      </div>
    </div>
  )
}

export default PostDetails
