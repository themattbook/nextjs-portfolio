import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  content,
}) {
  return (
    <div className="flex flex-col flex-1 items-center w-[70%] lg:w-[30%] sm:p-6 mx-auto mb-5 text-gray-300">
      <img
        className="object-cover w-full h-64 mb-4"
        src={cover_image}
        alt="Article"
      />
      <div className="mb-10 text-center">
        <h3 className="font-extrabold text-2xl sm:text-6xl tracking-tight uppercase">
          {title}
        </h3>
        <span className="text-sm text-gray-200">Posted on {date}</span>
      </div>
      <div
        className="text-xs sm:text-sm lg:text-base font-light tracking-tight text-gray-400 prose-a:underline prose-a:text-cyan-600 hover:prose-a:text-sky-400 prose-headings:text-gray-300 prose-headings:tracking-tight prose-headings:font-bold prose-sm"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { frontmatter, slug, content },
  };
}
