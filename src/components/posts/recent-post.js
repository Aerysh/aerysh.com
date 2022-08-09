import React from 'react'
import Link from 'next/link'

export default function RecentPost({ date, title, excerpt, slug }) {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="flex flex-col h-entry relative">
        <div className="h-full p-4 w-full border-2 border-ctp-lavender rounded-xl overflow-hidden bg-ctp-mantle hover:bg-ctp-crust active:bg-ctp-crust">
          <article className="flex flex-col h-full w-full p-2 space-y-2">
            <time className="text-xs lg:text-sm text-ctp-subtext-0">{date}</time>
            <h3 className="text-lg lg:text-xl font-semibold">{title}</h3>
            <p className="text-sm lg:text-base text-ctp-subtext0">{excerpt}</p>
          </article>
        </div>
      </a>
    </Link>
  )
}
