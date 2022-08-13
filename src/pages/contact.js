import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import Section from '../components/layout/section'

export default function Contact({ children }) {
  return (
    <>
      <Layout>
        <Section>
          <header className="space-y-2">
            <h2 className="text-2xl font-semibold">Contacts</h2>
            <p className="text-lg font-light">Several ways to reach me</p>
          </header>
          <section className="space-y-2">
            <h3 className="text-xl font-semibold">Social Media, etc.</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link href="https://github.com/Aerysh">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-ctp-rosewater hover:underline">
                    GitHub
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://gitlab.com/aerysh">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-ctp-rosewater hover:underline">
                    GitLab
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/aerysh_">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-ctp-rosewater hover:underline">
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://mastodon.social/@aerysh">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-ctp-rosewater hover:underline">
                    Mastodon
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://matrix.to/#/@aerysh:matrix.org">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-ctp-rosewater hover:underline">
                    Matrix
                  </a>
                </Link>
              </li>
            </ul>
          </section>
          <section className="space-y-2">
            <h3 className="text-xl font-semibold">Email</h3>
            <p>To reduce bot spam, please decipher this ROT13 text</p>
            <p className="text-ctp-pink">nuznqnmj2@tznvy.pbz</p>
          </section>
          <section className="space-y-2">
            <h3 className="text-xl font-semibold">GPG Key</h3>
            <p>GPG key for email encryption if you know how to do it</p>
            <ul className="list-disc list-inside">
              <li>
                <p className="inline text-ctp-pink">
                  gpg --keyserver keys.openpgp.org --recv-keys BFB0F6FC9740FAB1
                </p>
              </li>
              <li>
                <p className="inline text-ctp-pink">
                  Fingerprint: FFD6 EB61 FD8E 49E3 CA65 3AD4 BFB0 F6FC 9740 FAB1
                </p>
              </li>
            </ul>
          </section>
          <section className="space-y-2">
            <Link href="/">
              <a className="text-ctp-rosewater hover:underline">Back to home</a>
            </Link>
          </section>
        </Section>
      </Layout>
    </>
  )
}
