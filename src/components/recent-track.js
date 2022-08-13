import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function RecentTrack({ artist, image, album, name, url }) {
  return (
    <Link href={url}>
      <a target="_blank" rel="noreferrer" className="flex flex-col h-entry relative">
        <div className="h-full w-full">
          <article className="flex flex-col space-y-2 justify-center">
            <Image src={image} alt="album cover" width={300} height={300} />
            <p className="font-semibold">{name}</p>
            <p className="">{album}</p>
            <p className="text-ctp-subtext0">{artist}</p>
          </article>
        </div>
      </a>
    </Link>
  )
}
