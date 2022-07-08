import React from "react";
import Blog from "../../components/Blog";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";

export default function BlogArchive({ posts }) {
  const blogPosts = posts.map((post, index) => {
    return (
      <Blog
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        excerpt={post.frontmatter.excerpt}
        image={post.frontmatter.cover_image}
        category={post.frontmatter.category}
        slug={post.slug}
        key={index}
      />
    );
  });
  return (
    <>
      <div className="w-full container flex flex-1 items-center justify-center text-xs sm:text-sm mx-auto animate-fade-in">
        <div className="grid grid-cols-1 sm:gap-5">{blogPosts}</div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and front matter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get from matter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  }, []);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
