import React from 'react'
import Layout from '../components/layout/layout'
import HomeIntro from '../components/home/home-intro'
import HomePost from '../components/home/home-post'
import RecentPost from '../components/posts/recent-post'
import HomeTrack from '../components/home/home-track'
import RecentTrack from '../components/recent-track'
import { loadTracks } from '../lib/load-tracks'

export default function Home({ tracks }) {
  const recentTracks = tracks.recenttracks.track

  return (
    <>
      <Layout>
        <HomeIntro />
        <HomePost>
          <RecentPost
            date="09 Agustus 2022"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eleifend sapien. Cras luctus mollis eros, eget vehicula ipsum commodo ornare."
          />
          <RecentPost
            date="09 Agustus 2022"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eleifend sapien. Cras luctus mollis eros, eget vehicula ipsum commodo ornare."
          />

          <RecentPost
            date="09 Agustus 2022"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eleifend sapien. Cras luctus mollis eros, eget vehicula ipsum commodo ornare."
          />
        </HomePost>
        <HomeTrack>
          {recentTracks.map((track, idx) => (
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

  return { props: { tracks } }
}
