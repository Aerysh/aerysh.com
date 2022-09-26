import React from "react";
import Link from "next/link";

export default function RecentPost({ date, title, excerpt, slug }) {
  const intlDateFormat = new Date(date).toISOString().substring(0, 10);

  return (
    <Link href={`/posts/${slug}`}>
      <a className="flex flex-col h-entry relative">
        <div className="h-full p-4 w-full rounded-xl overflow-hidden bg-ctp-mantle hover:shadow-xl">
          <article className="flex flex-col h-full w-full p-2 space-y-2">
            <time className="text-xs lg:text-sm text-ctp-subtext-0">
              {intlDateFormat}
            </time>
            <h3 className="text-lg lg:text-xl font-semibold">{title}</h3>
            <p className="text-sm lg:text-base text-ctp-subtext0">{excerpt}</p>
          </article>
        </div>
      </a>
    </Link>
  );
}
