import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

import { motion } from "framer-motion";

import readArticles from "@/src/utils/readArticles";

const Layout = dynamic(() => import("@/src/components/Layout"));
const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

import { supabase } from "@/src/utils/supabaseClient";

function convertIdToUuid(id) {
  const hexId = id.toString(16);
  const paddedHexId = hexId.padStart(32, "0");
  const uuid = `${paddedHexId.substr(0, 8)}-${paddedHexId.substr(
    8,
    4
  )}-${paddedHexId.substr(12, 4)}-${paddedHexId.substr(
    16,
    4
  )}-${paddedHexId.substr(20)}`;

  return uuid;
}

export default function Post({ post, prevArticleData, nextArticleData }) {
  const [currentViews, setCurrentViews] = useState(post.views);

  const copyLinkToClipboard = () => {
    const url = window.location.href;
    let copyBtn = document.getElementById("copyPostBtn");
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Link copied to clipboard:", url);
        copyBtn.textContent = "❤️ Copied!";
        setTimeout(() => {
          copyBtn.textContent = "🔗 Copy post link!";
        }, 7000);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  useEffect(() => {
    const uuidId = convertIdToUuid(post.frontmatter.id);

    const incrementView = async () => {
      const { data: currentData, error: currentError } = await supabase
        .from("blog_views")
        .select("views")
        .eq("blog_id", uuidId)
        .single();

      const currentViews = currentData ? currentData.views : 0;

      const updatedViews = currentViews + 1;

      const { data, error } = await supabase
        .from("blog_views")
        .upsert([{ blog_id: uuidId, views: updatedViews }], {
          onConflict: ["blog_id"],
        });

      if (error) {
        console.error("Error incrementing view count:", error);
      } else {
        console.log("View count incremented successfully");
        setCurrentViews(updatedViews);
      }
    };

    incrementView();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "preetsuthar17/comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const commentsContainer = document.getElementById("utterances-comments");
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }
  }, []);

  const generateTableOfContents = (content) => {
    const headings = [];
    const toc = [];
    const regex = /<h([1-2])>(.*?)<\/h\1>/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      const headingLevel = parseInt(match[1]);
      const headingText = match[2];
      const slug = headingText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      headings.push({ level: headingLevel, text: headingText, slug });
    }

    let currentLevel = 1;
    const stack = [toc];

    headings.forEach((heading, index) => {
      const entry = { text: heading.text, slug: heading.slug, children: [] };
      entry.id = `${heading.level === 1 ? "h1" : "h2"}-${heading.slug}`;

      if (heading.level === 2) {
        toc.push(entry);
        currentLevel = 1;
        stack.length = 1;
        stack[0] = toc;
      } else if (heading.level === 2 && currentLevel === 1) {
        stack[stack.length - 1].push(entry);
        stack.push(entry.children);
        currentLevel = 2;
      } else if (heading.level === 2 && currentLevel === 2) {
        stack[stack.length - 1].push(entry);
      }
    });

    return toc;
  };
  const toc = generateTableOfContents(post.content);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Head>
          <title>{post.frontmatter.title}</title>
          <meta name="robots" content="all" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:url" content="https://preetsuthar.me" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, Front-end Developer, Portfolio, Blog"
          />{" "}
          <meta name="author" content="Preet Suthar" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content={post.frontmatter.title} />
          <meta name="subject" content="web development" />
          <link rel="canonical" href="https://preetsuthar.me/posts" />
        </Head>
        <Navbar />
        <>
          <article id="post-top" className="container">
            <h1 className="title">{post.frontmatter.title}</h1>
            <div className="styled-hr"></div>
            <div style={{ marginBottom: "2rem" }}>
              <div
                className="author p-color"
                style={{
                  marginBottom: " 0.8rem",
                }}
              >
                <Link
                  style={{
                    color: "#aaa",
                    borderBottom: "1px solid #ccc",
                    textDecoration: "none",
                  }}
                  href={post.frontmatter.authorGithub}
                  target="_blank"
                >
                  <span>{post.frontmatter.author}</span>
                </Link>
              </div>
              <time className="date">{post.frontmatter.date} - </time>
              <span className="p-color date">{currentViews} views</span>
              <div className="post-tag ">
                {post.frontmatter.tags.map((tag) => (
                  <div key={tag}>
                    <Link
                      className="no-decoration p-color"
                      href={`/tags/${tag}`}
                    >
                      {tag}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {toc.length > 0 && (
              <div className="tableOfContent" style={{ paddingBottom: "1rem" }}>
                <h2>Table of Contents</h2>
                <ul>
                  {toc.map((item, index) => (
                    <li key={index}>
                      <Link href={`#${item.slug}`}>{item.text}</Link>
                      {item.children.length > 0 && (
                        <ul>
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link href={`#${child.slug}`}>{child.text}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div
                  className="copy-link"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <button
                    id="copyPostBtn"
                    className="primary-btn"
                    onClick={copyLinkToClipboard}
                  >
                    🔗 Copy link!
                  </button>
                </div>
              </div>
            )}
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(
                  /<(h[1-2])>(.*?)<\/\1>/g,
                  (match, tag, content) =>
                    `<${tag} id="${tag === "h1" ? "" : ""}${content
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}">${content}</${tag}>`
                ),
              }}
            />
            <div className="post-top">
              <Link href="#post-top">
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
            <div id="utterances-comments" />
            <hr />
            <div className="post-navigation">
              <div className="prev">
                {prevArticleData && (
                  <Link href={`/posts/${prevArticleData.slug}`}>
                    👈 {prevArticleData.title}
                  </Link>
                )}
              </div>
              <div className="next">
                {nextArticleData && (
                  <Link href={`/posts/${nextArticleData.slug}`}>
                    {nextArticleData.title} 👉
                  </Link>
                )}
              </div>
            </div>
            <Footer />
          </article>
        </>
      </Layout>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("articles");
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMetadata = fs.readFileSync(
    path.join("articles", `${params.slug}.md`),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMetadata);

  const formattedDate = formatDate(data.date);
  const frontmatter = {
    title: data.title,
    date: formattedDate,
    id: data.id,
    author: data.author,
    authorGithub: data.authorGithub,
    tags: data.tags,
  };

  function formatDate(date) {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      new Date(date)
    );
    return formattedDate;
  }

  const articles = readArticles();
  const currentIndex = articles.findIndex(
    (article) => article.slug === params.slug
  );
  const prevArticle = articles[currentIndex + 1] || null;
  const nextArticle = articles[currentIndex - 1] || null;

  const prevArticleData = prevArticle
    ? {
        slug: prevArticle.slug,
        title: prevArticle.frontmatter.title,
      }
    : null;

  const nextArticleData = nextArticle
    ? {
        slug: nextArticle.slug,
        title: nextArticle.frontmatter.title,
      }
    : null;

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const { data: viewsData, error: viewsError } = await supabase
    .from("blog_views")
    .select("views")
    .eq("blog_id", frontmatter.id)
    .single();

  const views = viewsData ? viewsData.views : 0;
  return {
    props: {
      post: {
        frontmatter,
        content: contentHtml,
        views,
      },
      prevArticleData,
      nextArticleData,
    },
  };
}
