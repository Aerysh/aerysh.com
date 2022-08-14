import React from 'react'
import { getAllPosts } from '../../lib/load-posts'
import Layout from '../../components/layout/layout'
import PostList from '../../components/posts/post-list'
import Section from '../../components/layout/section'
import Link from 'next/link'

export default function Post({ posts }) {
  return (
    <Layout>
      <Section>
        <section>
          {posts.map((post, idx) => (
            <PostList
              key={idx}
              slug={post.slug}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </section>
        <footer className="text-center">
          <Link href="/">
            <a className="text-ctp-rosewater hover:underline">Back to home</a>
          </Link>
        </footer>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt'])

  return {
    props: { posts }
  }
}
