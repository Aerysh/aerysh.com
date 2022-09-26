import React from "react";
import Image from "next/image";
import Section from "../layout/section";
import myLogo from "../../../public/logo.jpg";
import Link from "next/link";

export default function HomeIntro() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 items-center">
        <div className="flex justify-center lg:justify-end">
          <Image src={myLogo} alt="Aerysh Logo" width={200} height={200} />
        </div>
        <div className="lg:order-first space-y-5">
          <h2 className="text-2xl text-center font-semibold">Introduction</h2>
          <p className="text-lg font-light text-justify">
            {`I'm Aerysh and this is my webpage. There will be a lot of things here`}
          </p>
          <ul className="list-disc list-inside">
            <li>
              <Link href="/posts">
                <a className="text-ctp-rosewater hover:underline">Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-ctp-rosewater hover:underline">Contacts</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
