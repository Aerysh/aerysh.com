import React from 'react'
import Layout from '../components/layout/layout'
import HomeIntro from '../components/home/home-intro'
import HomePost from '../components/home/home-post'
import RecentPost from '../components/posts/recent-post'
import HomeTrack from '../components/home/home-track'
import RecentTrack from '../components/recent-track'
import { loadTracks } from '../lib/load-tracks'
import { getAllPosts } from '../lib/load-posts'
import MetaTags from '../components/meta-tags'

export default function Home({ tracks, posts }) {
  const recentTracks = tracks.recenttracks.track

  return (
    <>
      <MetaTags
        title="Home"
        description="My personal blog where I post things that I think are interesting."
        slug=""
      />
      <Layout>
        <HomeIntro />
        <HomePost>
          {posts.slice(0, 3).map((post, idx) => (
            <RecentPost
              key={idx}
              date={post.date}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </HomePost>
        <HomeTrack>
          {recentTracks.slice(0,1).map((track, idx) => (
            <RecentTrack
              key={idx}
              artist={track.artist['#text']}
              image={track.image[3]['#text']}
              album={track.album['#text']}
              name={track.name}
              url={track.url}
            />
          ))}
        </HomeTrack>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const tracks = await loadTracks()
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt'])

  return { props: { tracks, posts } }
}
