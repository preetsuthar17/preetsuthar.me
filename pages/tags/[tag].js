import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { motion } from "framer-motion";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";

import getFirstFewLines from "@/src/utils/functions/getFirstFewLines";
import formatDate from "@/src/utils/functions/formatDate";

gsap.registerPlugin(ScrollTrigger);

const Tag = ({ blogs }) => {
  useEffect(() => {
    const handleMousemove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
    document.querySelectorAll(".blog-card").forEach((card) => {
      card.addEventListener("mousemove", handleMousemove);
      return () => {
        card.removeEventListener("mousemove", handleMousemove);
      };
    });
  }, []);

  const router = useRouter();
  const { tag } = router.query;

  if (!tag) {
    return <div>Loading...</div>;
  }
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        Array.isArray(blog.frontmatter.tags) &&
        blog.frontmatter.tags.includes(tag)
    )
    .map((blog) => ({
      tag: blog.frontmatter.tags || [],
      title: blog.frontmatter.title || "",
      slug: blog.slug,
      description: blog.frontmatter.description || "",
      date: blog.frontmatter.date || "",
      content: blog.content || "",
    }))
    .sort((a, b) => {
      const regex = /(\d+)/;
      const aMatch = a.title.match(regex);
      const bMatch = b.title.match(regex);

      if (aMatch && bMatch) {
        const aNumber = parseInt(aMatch[0]);
        const bNumber = parseInt(bMatch[0]);

        return aNumber - bNumber;
      }

      return a.title.localeCompare(b.title);
    });

  return (
    <>
      <Head>
        <title>Tag {tag} 🚀</title>
        <meta name="robots" content="all" />

        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content={tag} />
        <meta property="og:url" content="https://preetsuthar.me/tags" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content={tag} />
        <meta name="subject" content="web development" />
      </Head>
      <Navbar />
      <div id="blog-title" className="blog-div">
        <motion.div
          initial={{ opacity: 1, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="blog-headers">
            <div className="blog-title">
              <h1>&#47;{tag}</h1>
            </div>
            <div className="blog-header-text">
              <p>Posts tagged with "{tag}"</p>
            </div>
          </div>
        </motion.div>

        <div className="styled-hr"></div>

        <h1
          style={{
            opacity: 0,
          }}
        >
          Blogs tagged with {tag}
        </h1>

        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="blog-container">
            {filteredBlogs.map((blog, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 1, x: -80 }}
                  animate={{ opacity: 1, x: 80 }}
                  exit={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="blog-card">
                    <Link href={`/posts/${blog.slug}`}>
                      <h2
                        className="blog-header"
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        {blog.title}
                      </h2>
                    </Link>
                    <p className="blog-text">
                      {getFirstFewLines(blog.content)}...{" "}
                    </p>
                    <div>
                      <Link
                        href={`/posts/${blog.slug}`}
                        className="blog-read-link"
                        passHref
                      >
                        Read{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-in-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                          />
                          <path
                            fillRule="evenodd"
                            d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                          />
                        </svg>
                      </Link>
                      <p
                        className="blog-text blog-date"
                        style={{
                          fontSize: "0.9rem",
                        }}
                      >
                        {blog.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Tag;

export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const allTags = fileNames.reduce((tags, fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    if (data.tags && Array.isArray(data.tags)) {
      tags.push(...data.tags);
    }

    return tags;
  }, []);

  const uniqueTags = [...new Set(allTags)];

  const paths = uniqueTags.map((tag) => ({
    params: { tag },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: {
        tags: data.tags || [],
        title: data.title || "",
        description: data.description || getFirstFewLines(content),
        date: formatDate(data.date.toString()),
      },
      slug: fileName.replace(/\.md$/, ""),
      content,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
