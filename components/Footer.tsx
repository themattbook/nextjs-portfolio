import React from "react";
const date = new Date();

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-between px-6 py-4 sm:flex-row container mx-auto text-gray-400">
        <a href="#" className="text-xl font-bold">
          matthew sweet
        </a>

        <p className="py-2 sm:py-0 text-sm">
          &copy; {date.getFullYear()} - All Rights Reserved.
        </p>

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
