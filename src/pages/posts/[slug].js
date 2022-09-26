import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/load-posts";
import { convertDate } from "../../lib/convert-date";
import markdownToHtml from "../../lib/md-to-html";
import Layout from "../../components/layout/layout";
import ErrorPage from "../404";

import { PostBody } from "../../components/posts/post-body";
import MetaTags from "../../components/meta-tags";
import Navigation from "../../components/layout/navigation";

export default function ReadPost({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return ErrorPage;
  }

  return (
    <>
      <MetaTags
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
      />
      {router.isFallback ? (
        <>Loading</>
      ) : (
        <Layout>
          <Navigation />
          <article className="p-4 space-y-9">
            <header className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-ctp-text">{post.title}</h1>
              <p className="text-lg font-light text-ctp-subtext0">
                {convertDate(post.date)} by {post.author}
              </p>
            </header>
            <section>
              <PostBody content={post.content} />
            </section>
            <footer className="space-y-2 text-center">
              <Link href="/">
                <a className="text-ctp-rosewater hover:underline">
                  Back to home
                </a>
              </Link>
            </footer>
          </article>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
