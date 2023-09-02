import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));
const Layout = dynamic(() => import("@/src/components/Layout"));

export default function Posts({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(posts);

  const sanitizeQuery = (query) => {
    return query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(posts);
    } else {
      const sanitizedQuery = sanitizeQuery(searchQuery); // Sanitize the query
      const regex = new RegExp(`(${sanitizedQuery})`, "gi");

      const filteredResults = posts.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().match(regex) ||
          post.frontmatter.description.toLowerCase().match(regex)
      );
      setSearchResults(filteredResults);
    }
  }, [searchQuery, posts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Layout>
        <Head>
          <title>Blogs | Preet Suthar 🚀</title>
          <meta name="robots" content="all" />

          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Blogs | Preet Suthar 🚀" />
          <meta property="og:url" content="https://preetsuthar.me/posts" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Preet Suthar" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="Blogs | Preet Suthar 🚀" />
          <meta name="subject" content="web development" />
        </Head>
        <Navbar />
        <>
          <div id="blog-title" className="blog-div">
            <div className="blog-headers">
              <div className="blog-title">
                <h1>&#47;blogs</h1>
              </div>
              <div className="blog-header-text">
                <p>I do write blogs sometimes.</p>
              </div>

              <input
                style={{ marginTop: "2rem" }}
                className="blog-search"
                type="text"
                placeholder="Search Article"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="styled-hr"></div>

            <div className="blog-container">
              {searchResults.length === 0 ? (
                <p
                  style={{
                    margin: "1rem 0",
                    color: "#777777",
                    fontSize: "1.3rem",
                  }}
                >
                  No blogs found.
                </p>
              ) : (
                searchResults.map((post) => (
                  <div key={post.slug} className="blog-card">
                    <div>
                      <Link href={`/posts/${post.slug}`} passHref>
                        <h2 className="blog-header">
                          {" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.title,
                              searchQuery,
                            }}
                          />
                        </h2>
                      </Link>
                      <p className="blog-text">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description,
                            searchQuery,
                          }}
                        />
                      </p>
                      <div
                        style={{
                          marginTop: "0.6rem",
                        }}
                      >
                        <Link href={`/posts/${post.slug}`} passHref>
                          Read article &rarr;
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="blog-text blog-date">
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="posts-post-top">
              <Link href="#blog-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-arrow-up-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
              </Link>
            </div>
          </div>
          <Footer />
        </>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("articles");
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );
    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      title: data.title,
      date: formatDate(data.date.toString()),
      description: data.description,
    };
    const lines = content.split("\n");
    let description = "";
    for (const line of lines) {
      if (line.trim().length > 0 && !line.trim().startsWith("#")) {
        description = line.trim();
        break;
      }
    }
    if (!description) {
      description = lines[0].trim();
    }
    if (description.length > 100) {
      description = description.substring(0, 50) + "...";
    }
    frontmatter.description = description;

    return {
      slug: filename.replace(".mdx", ""),
      frontmatter,
      content,
    };
  });

  posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  return {
    props: {
      posts,
    },
  };
}

function formatDate(date) {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );
  return formattedDate;
}
