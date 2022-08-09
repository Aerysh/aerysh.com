import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col w-full h-full min-h-screen p-0 mx-auto">
      <main className="p-4 relative mx-auto max-w-screen-lg">
        <div className="space-y-9 p-4">{children}</div>
      </main>
    </div>
  )
}
