import React from "react";
import Blog from "./Blog";

export default function Blogarea({ posts }) {
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
      <div className="container mx-auto m-5 flex items-center">
        <h3 className="font-medium text-xl tracking-tight">
          <i className="fa-solid fa-hashtag text-sky-500"></i> Archive
        </h3>
      </div>
      <div className="w-full container flex text-xs sm:text-sm mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-5">
          {blogPosts}
        </div>
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
