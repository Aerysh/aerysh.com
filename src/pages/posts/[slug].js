import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'

import { getPostBySlug, getAllPosts } from '../../lib/load-posts'
import markdownToHtml from '../../lib/md-to-html'
import { PostBody } from '../../components/posts/post-body'
import Link from 'next/link'

export default function ReadPost({ post }) {
  const router = useRouter()
  const intlDateFormat = new Date(post.date).toISOString().substring(0, 10)

  if (!router.isFallback && !post?.slug) {
    return <>404</>
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading</>
      ) : (
        <Layout>
          <article className="p-4 space-y-9">
            <header className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-ctp-text">{post.title}</h1>
              <p className="text-lg font-light text-ctp-subtext0">
                {intlDateFormat} by {post.author}
              </p>
            </header>
            <section>
              <PostBody content={post.content} />
            </section>
            <footer className="space-y-2 text-center">
              <Link href="/">
                <a className="text-ctp-rosewater hover:underline">Back to home</a>
              </Link>
            </footer>
          </article>
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}
export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
