import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

import dynamic from "next/dynamic";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));
import Layout from "@/src/components/Layout";

export default function Posts({ posts, tags }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(posts);

  const sanitizeQuery = (query) => {
    return query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    const contentItems = document.querySelectorAll(".post-tag");

    contentItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -80 },

        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          delay: index * 0.01,

          ease: "power1.in",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const initializeCardAnimation = () => {
    const contentItems = document.querySelectorAll(".blog-card");

    contentItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          delay: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  };

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

  useEffect(() => {
    initializeCardAnimation();
  }, [searchResults]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(posts);
    } else {
      const sanitizedQuery = sanitizeQuery(searchQuery);
      const regex = new RegExp(`(${sanitizedQuery})`, "gi");

      const filteredResults = posts.filter((post) => {
        const lowercaseTags = post.frontmatter.tags.map((tag) =>
          tag.toLowerCase()
        );
        return (
          post.frontmatter.title.toLowerCase().match(regex) ||
          post.frontmatter.description.toLowerCase().match(regex) ||
          lowercaseTags.some((tag) => tag.match(regex))
        );
      });

      setSearchResults(filteredResults);
    }
  }, [searchQuery, posts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
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
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer"
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
            <motion.div
              initial={{ opacity: 1, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="blog-headers">
                <div className="blog-title">
                  <h1>&#47;blogs</h1>
                </div>
                <div className="blog-header-text">
                  <p>I do write blogs sometimes.</p>
                </div>
                <div className="blog-search-input">
                  <input
                    style={{ marginTop: "2rem", borderRadius: "5px" }}
                    className="blog-search"
                    type="text"
                    placeholder="Search Article or Tag (e.g. DSA)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="tags-container">
                  {tags.map((tag) => (
                    <div className="post-tag tags-item" key={tag}>
                      <Link
                        className="no-decoration p-color"
                        href={`/tags/${tag}`}
                      >
                        {tag}
                      </Link>
                    </div>
                  ))}
                  <Link className="post-tag p-color" href="/tags">
                    All Tags
                  </Link>
                </div>
              </div>
            </motion.div>

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
                searchResults.map((post, i) => (
                  // <motion.div
                  //   key={post.slug}
                  //   initial={{ translateY: -70 }}
                  //   animate={{ translateY: 0 }}
                  //   exit={{ translateY: 0 }}
                  //   transition={{ duration: 0.5, delay: i * 0.1 }}
                  // >
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
                        style={
                          {
                            // marginTop: "0.6rem",
                          }
                        }
                      >
                        <Link
                          href={`/posts/${post.slug}`}
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
                      </div>
                    </div>

                    <p className="blog-text blog-date">
                      {post.frontmatter.date}
                    </p>
                  </div>
                  // </motion.div>
                ))
              )}
            </div>
            <div className="posts-post-top">
              <Link href="#topPage">
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
      tags: data.tags || [],
    };
    const lines = content.split("\n");
    let description = "";
    for (const line of lines) {
      if (line.trim().length > 0 && !line.trim().startsWith("#")) {
        if (!line.trim().startsWith("![")) {
          description = line.trim();
          break;
        }
      }
    }
    if (!description) {
      description = lines[0].trim();
    }
    if (description.length > 100) {
      description = description.substring(0, 60) + "...";
    }
    frontmatter.description = description;
    const tags = data.tags || [];
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
      content,
      tags,
    };
  });

  // Sort by date in descending order, then by name in descending numerical order
  posts.sort((a, b) => {
    const dateComparison =
      new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    if (dateComparison !== 0) {
      return dateComparison;
    }
    // Assuming the names are numbers, use parseInt for numerical comparison
    return (
      parseInt(b.frontmatter.title, 10) - parseInt(a.frontmatter.title, 10)
    );
  });

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.tags))
  );

  return {
    props: {
      posts,
      tags: allTags,
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
