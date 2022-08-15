import React from 'react'
import Section from '../layout/section'

export default function HomeTrack({ children }) {
  return (
    <Section>
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Recent Tracks</h2>
        <p className="text-lg font-light">
          {`Recent songs I've been listening to`}
        </p>
      </header>
      <section>
        {children}
      </section>
    </Section>
  )
}
