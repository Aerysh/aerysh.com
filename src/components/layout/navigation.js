import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "../../../public/logo.jpg";

export default function Navigation() {
  return (
    <div className="relative p-4 flex items-center justify-between">
      <Image src={myLogo} alt="Aerysh's Logo" width={100} height={100} />
      <div className="flex items-center">
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/">
                <a className="text-ctp-rosewater hover:underline">Home</a>
              </Link>
            </li>
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
        </nav>
      </div>
    </div>
  );
}
