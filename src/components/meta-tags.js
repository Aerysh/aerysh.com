import Head from "next/head";
import React from "react";

export default function MetaTags({ title, description, slug }) {
  return (
    <Head>
      <title>{`${title} | Aerysh`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`${description}`} />

      {/* Social Tags*/}
      <meta name="twitter:card" value="summary" />

      <meta property="og:title" content={`${title} | Aerysh`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://www.aerysh.com/${slug}`} />
      <meta property="og:image" content="https://www.aerysh.com/logo.jpg" />
      <meta property="og:description" content={`${description}`} />
    </Head>
  );
}
