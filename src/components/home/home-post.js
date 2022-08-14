import React from 'react'
import Link from 'next/link'
import Section from '../layout/section'

export default function HomePost({ children }) {
  return (
    <Section>
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
        <p className="text-lg font-light">
          Writing that comes from random things that I often think about
        </p>
      </header>
      <section>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">{children}</div>
      </section>
      <footer>
        <Link href="/posts">
          <a className="text-ctp-rosewater hover:underline">View All Posts</a>
        </Link>
      </footer>
    </Section>
  )
}
