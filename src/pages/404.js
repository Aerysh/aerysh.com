import Link from "next/link";
import React from "react";
import MetaTags from "../components/meta-tags";

export default function ErrorPage() {
  return (
    <>
      <MetaTags
        title="Page Not Found"
        description="Looks like you went to a wrong place"
        slug="404"
      />
      <div className="flex flex-col items-center justify-center h-screen space-y-3">
        <h1 className="text-4xl text-ctp-red font-bold">404</h1>
        <h1 className="text-3xl text-ctp-text font-bold">Page Not Found</h1>
        <Link href="/">
          <a className="text-ctp-rosewater hover:underline">Back to Home</a>
        </Link>
      </div>
    </>
  );
}
