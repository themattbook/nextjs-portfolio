import Head from "next/head";
import ResumeArea from "../components/ResumeArea";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Matthew Sweet</title>
        <meta name="description" content="A simple Nextjs Todo Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResumeArea posts={posts} />
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
