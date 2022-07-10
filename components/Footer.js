import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-evenly sm:justify-between px-6 py-4 sm:flex-row container mx-auto text-gray-400 animate-fade-in">
        <Link href="/" passHref>
          <a className="text-lg sm:text-2xl font-bold cursor-pointer hover:underline">
            mattsweet
          </a>
        </Link>
        <Link href="/blog/archive" passHref>
          <a href="#" className="text-sm cursor-pointer hover:underline">
            blog
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a className="text-sm cursor-pointer hover:underline">projects</a>
        </Link>

        <div className="flex -mx-2">
          <Link href="https://www.linkedin.com/in/meetmattsweet/" passHref>
            <a
              className="mx-2 cursor-pointer hidden sm:block"
              aria-label="LinkedIn"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Link>
          <Link href="https://instagram.com/javascript_matt" passHref>
            <a
              className="mx-2 cursor-pointer hidden sm:block"
              aria-label="Instagram"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </Link>
          <Link href="https://twitter.com/meetmattsweet" passHref>
            <a
              className="mx-2 cursor-pointer hidden sm:block"
              aria-label="Twitter"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Link>
          <Link href="https://github.com/themattbook" passHref>
            <a
              className="mx-2 cursor-pointe hidden sm:blockr"
              aria-label="Github"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </Link>
          <Link href="https://codepen.io/themattbook" passHref>
            <a
              className="mx-2 cursor-pointer hidden sm:block"
              aria-label="Codepen"
              target="_blank"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>
          </Link>
          <Link href="mailto:themattbook@gmail.com" passHref>
            <a
              className="mx-2 cursor-pointer hidden sm:block"
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
