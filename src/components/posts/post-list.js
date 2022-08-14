import Link from 'next/link'
import React from 'react'
import { convertDate } from '../../lib/convert-date'

export default function PostList({ slug, date, title, excerpt }) {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <div className="bg-ctp-mantle hover:bg-ctp-crust rounded p-3 space-y-2">
          <div className="flex justify-between items-center space-x-3">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-subtext0">{convertDate(date)}</p>
          </div>
          <div className="text-subtext0">{excerpt}</div>
        </div>
      </a>
    </Link>
  )
}
