import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-screen-lg">
      <main className="container mx-auto">
        <div className="space-y-9 p-4">{children}</div>
      </main>
    </div>
  )
}
