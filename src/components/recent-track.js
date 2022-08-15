import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function RecentTrack({ artist, image, album, name, url }) {
  return (
    <Link href={url}>
      <a
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center h-entry relative">
        <table>
          <tbody>
            <tr>
              <td className="p-2">
                <Image
                  src={image}
                  alt={`${album} cover art`}
                  width={150}
                  height={150}
                />
              </td>
              <td className="p-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="font-normal">{artist}</p>
                <p className="font-light">{album}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </a>
    </Link>
  )
}
