import React from "react";
import Link from "next/link";

export default function Blog({ title, date, excerpt, image, category, slug }) {
  return (
    <>
      <div className="mx-auto overflow-hidden rounded-lg mb-3 sm:mb-0 shadow-md">
        <img className="object-cover w-full h-64" src={image} alt="Article" />
        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-sky-500 uppercase">
              {category}
            </span>
            <span className="block mt-2 text-2xl font-extrabold tracking-tight transition duration-300 transform hover:text-sky-600 hover:pl-3">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </span>
            <p className="mt-2 text-base text-gray-600">{excerpt}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <span className="font-medium text-xs text-gray-500 dark:text-gray-300">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
