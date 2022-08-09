import React from 'react'
import { useEffect } from 'react'
import Layout from '../components/layout/layout'
import HomeIntro from '../components/home/home-intro'
import HomePost from '../components/home/home-post'
import RecentPost from '../components/posts/recent-post'

export default function Home() {
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
      </Layout>
    </>
  )
}
