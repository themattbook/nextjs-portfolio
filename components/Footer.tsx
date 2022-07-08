import React from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-between px-6 py-4 sm:flex-row container mx-auto text-gray-400 animate-fade-in">
        <Link href="/" passHref>
          <a
            href="#"
            className="text-2xl font-bold cursor-pointer hover:underline"
          >
            matthew sweet
          </a>
        </Link>
        <Link href="/" passHref>
          <a href="#" className="text-sm cursor-pointer hover:underline">
            blog
          </a>
        </Link>
        <Link href="/" passHref>
          <a href="#" className="text-sm cursor-pointer hover:underline">
            get in touch
          </a>
        </Link>
        <Link href="/" passHref>
          <a href="#" className="text-sm cursor-pointer hover:underline">
            see this portfolio&apos;s code
          </a>
        </Link>

        <div className="flex -mx-2">
          <Link href="https://instagram.com/javascript_matt" passHref>
            <a
              className="mx-2 cursor-pointer"
              aria-label="Instagram"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </Link>
          <Link href="https://twitter.com/meetmattsweet" passHref>
            <a
              className="mx-2 cursor-pointer"
              aria-label="Twitter"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Link>
          <Link href="https://github.com/themattbook" passHref>
            <a
              className="mx-2 cursor-pointer"
              aria-label="Github"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </Link>
          <Link href="https://codepen.io/themattbook" passHref>
            <a
              className="mx-2 cursor-pointer"
              aria-label="Codepen"
              target="_blank"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>
          </Link>
          <Link href="mailto:themattbook@gmail.com" passHref>
            <a
              className="mx-2 cursor-pointer"
              aria-label="Mail"
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
}
