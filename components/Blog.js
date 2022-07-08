import React from "react";
import Link from "next/link";

export default function Blog({ title, date, excerpt, image, category, slug }) {
  return (
    <>
      <div className="flex flex-1 items-center px-5 mt-3 sm:mt-0">
        <div className="mb-4 hover:cursor-pointer hover:opacity-20 hover:ml-5">
          <Link href={`/blog/${slug}`}>
            <div>
              <h3 className="font-extrabold text-gray-300 tracking-tight text-2xl sm:text-4xl uppercase">
                {title}
              </h3>
              <p className="font-medium text-sm text-cyan-500">
                {date} &rarr; {category}
              </p>
              <p className="text-xs font-medium text-gray-400 tracking-wide">
                {excerpt}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
