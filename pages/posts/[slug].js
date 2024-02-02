import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import twitterLogo from "../../src/utils/icons/twitter.svg";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/src/utils/supabaseClient";

import { useRouter } from "next/router";

const Layout = dynamic(() => import("@/src/components/Layout"));
const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

import hljs from "highlight.js/lib/core";
import sql from "highlight.js/lib/languages/sql";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import powershell from "highlight.js/lib/languages/powershell";
import cpp from "highlight.js/lib/languages/cpp";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import xml from "highlight.js/lib/languages/xml";

import convertIdToUuid from "@/src/utils/functions/convertIdToUuid";
import calculateReadTime from "@/src/utils/functions/calculateReadTime";
import generateTableOfContents from "@/src/utils/functions/generateTableOfContents";
import formatDate from "@/src/utils/functions/formatDate";
import readArticles from "@/src/utils/functions/readArticles";
import {
  playClickSound,
  playPostLikedSound,
} from "@/src/utils/functions/ClickAudioPlayer";

export default function Post({
  post,
  prevArticleData,
  nextArticleData,
  similarTagArticles,
}) {
  const [currentViews, setCurrentViews] = useState(post.views);
  const [twitterHref, setTwitterHref] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 0);

  const router = useRouter();

  const { slug } = router.query;
  const editPageUrl = `https://github.com/preetsuthar17/preetsuthar.me/edit/main/articles/${slug}.md?plain=1`;

  const toc = generateTableOfContents(post.content);
  const isAccordionActive = (articleId) => activeAccordion === articleId;

  useEffect(() => {
    const tweetText = encodeURIComponent(post.frontmatter.title);
    const tweetUrl = encodeURIComponent(window.location.href);
    const href = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
    setTwitterHref(href);
  }, [post.frontmatter.title]);

  useEffect(() => {
    const uuidId = convertIdToUuid(post.frontmatter.id);

    const fetchLikeCount = async () => {
      const { data, error } = await supabase
        .from("blog_views")
        .select("likes")
        .eq("blog_id", uuidId)
        .single();

      if (error) {
        console.error("Error fetching like count:", error);
      } else {
        const initialLikesCount = data ? data.likes : 0;
        setLikesCount(initialLikesCount);
      }
    };

    fetchLikeCount();

    const likedKey = `liked_${post.frontmatter.id}`;
    const isLiked = localStorage.getItem(likedKey);
    if (isLiked) {
      setLiked(true);
    }
  }, [slug]);

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
  }, [slug]);

  useEffect(() => {
    const script = document.createElement("Script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "preetsuthar17/comments");
    script.setAttribute("data-repo-id", "R_kgDOGIcPqw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOGIcPq84CZZYm");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const commentsContainer = document.getElementById("giscus-comments");
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }
  }, [slug]);

  useEffect(() => {
    setLiked(false);

    const likedKey = `liked_${slug}`;
    const isLiked = localStorage.getItem(likedKey);
    if (isLiked) {
      setLiked(true);
    }
  }, [slug]);

  const handleLikeClick = async () => {
    const uuidId = convertIdToUuid(post.frontmatter.id);
    if (!liked) {
      const { data, error } = await supabase
        .from("blog_views")
        .upsert([{ blog_id: uuidId, likes: likesCount + 1 }], {
          onConflict: ["blog_id"],
        });

      if (error) {
        console.error("Error incrementing like count:", error);
      } else {
        console.log("Like count incremented successfully");
        setLiked(true);
        setLikesCount(likesCount + 1);
        localStorage.setItem(`liked_${post.frontmatter.id}`, "true");
      }
    } else {
      const { data, error } = await supabase
        .from("blog_views")
        .upsert([{ blog_id: uuidId, likes: likesCount - 1 }], {
          onConflict: ["blog_id"],
        });

      if (error) {
        console.error("Error decrementing like count:", error);
      } else {
        console.log("Like count decremented successfully");
        setLiked(false);
        setLikesCount(likesCount - 1);
        localStorage.removeItem(`liked_${post.frontmatter.id}`);
      }
    }
  };

  useEffect(() => {
    hljs.registerLanguage("sql", sql);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("python", python);
    hljs.registerLanguage("c", c);
    hljs.registerLanguage("cpp", cpp);
    hljs.registerLanguage("powershell", powershell);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("php", php);
    hljs.registerLanguage("php-template", phpTemplate);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
  });

  useEffect(() => {
    hljs.highlightAll({ detectLanguage: true });
  });

  const sortedSimilarTagArticles = [...similarTagArticles].sort((a, b) => {
    const titleA = a.frontmatter.title.toLowerCase();
    const titleB = b.frontmatter.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });

  const handleAccordionClick = (articleId) => {
    setActiveAccordion((prevActive) =>
      prevActive === articleId ? null : articleId
    );
  };

  const copyLinkToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Link copied to clipboard:", url);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  const postLikedAnimation = () => {
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
  };

  useEffect(() => {
    console.clear();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Head>
          <title>{post.frontmatter.title.toString()}</title>
          <meta name="robots" content="all" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:url" content="https://preetsuthar.me" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://preetsuthar.me/website-icon.png"
          />
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
          <meta
            name="description"
            content="My personal portfolio website with informative web development blogs free of cost ✨."
          />
          <meta
            property="og:description"
            content="My personal portfolio website with informative web development blogs free of cost ✨."
          />
          <meta
            name="twitter:description"
            content="My personal portfolio website with informative web development blogs free of cost ✨."
          />{" "}
        </Head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
        <Script async src="https://js.stripe.com/v3/buy-button.js"></Script>
        <Script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"></Script>
        <Navbar goback={true} />
        <>
          <article id="post-top" className="container">
            <h1 className="title">{post.frontmatter.title}</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
              }}
            >
              {post.frontmatter.tags.map((tag) => (
                <Link
                  className="no-decoration p-color"
                  onClick={playClickSound}
                  href={`/tags/${tag}`}
                  key={tag}
                >
                  <div
                    className="post-tag-slug"
                    style={{
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      margin: "0",
                    }}
                  >
                    {tag}&nbsp;
                  </div>
                </Link>
              ))}
            </div>
            <div className="styled-hr"></div>
            <div
              style={{
                marginBottom: "2rem",
              }}
            >
              <div
                className="author p-color"
                style={{
                  marginBottom: " 0.5rem",
                }}
              >
                <span className="date">By </span>
                <Link
                  style={{
                    color: "#f0edf3e8",

                    textDecoration: "none",
                  }}
                  onClick={playClickSound}
                  href={post.frontmatter.authorGithub}
                  target="_blank"
                >
                  <span
                    style={{
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    {post.frontmatter.author}
                  </span>
                </Link>
              </div>
              <time className="date">{post.frontmatter.date} - </time>
              <span className="p-color date">{currentViews} views - </span>
              <span className="p-color date" style={{ margin: "0.5rem 0" }}>
                {post.readTime} read
              </span>

              <div className="share_and_copy_link">
                <abbr title="Share on X">
                  <Link
                    onClick={playClickSound}
                    href={twitterHref}
                    data-size="large"
                    target="_blank"
                  >
                    <Image
                      src={twitterLogo}
                      width={28}
                      height={28}
                      alt="Twitter (x)"
                      style={{
                        marginTop: "0.9rem",
                      }}
                    />
                  </Link>
                </abbr>
                &nbsp; &nbsp;
                <abbr title="copy post link">
                  <span
                    id="copyPostBtn"
                    onClick={() => {
                      copyLinkToClipboard();
                      playClickSound();
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#b1b1b1"
                        d="M165.66 90.34a8 8 0 0 1 0 11.32l-64 64a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0ZM215.6 40.4a56 56 0 0 0-79.2 0l-30.06 30.05a8 8 0 0 0 11.32 11.32l30.06-30a40 40 0 0 1 56.57 56.56l-30.07 30.06a8 8 0 0 0 11.31 11.32l30.07-30.11a56 56 0 0 0 0-79.2Zm-77.26 133.82l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31Z"
                      />
                    </svg>
                  </span>
                </abbr>
              </div>
              <div className="like-section">
                <div
                  className={`like-button ${liked ? "liked" : ""}`}
                  onClick={() => {
                    handleLikeClick();
                  }}
                  disabled={liked}
                >
                  {liked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#ff3860"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                      style={{ animation: "pop 0.3s ease" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  ) : (
                    <div
                      onClick={() => {
                        postLikedAnimation();
                        playPostLikedSound();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#ff3860"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </div>
                  )}
                </div>
                <p
                  style={{
                    fontWeight: "900",
                    opacity: "80%",
                    fontSize: "1.3rem",
                  }}
                  className="likes-count p-color"
                >
                  {likesCount < 1 ? "0" : likesCount}{" "}
                </p>
              </div>

              <Link
                onClick={playClickSound}
                href={editPageUrl}
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "1rem 0",
                  color: "#f0edf3e8",
                  textDecoration: "none",
                  marginBottom: "-1rem",
                  gap: "0.4rem",
                  background: "#cccccc15",
                  width: "fit-content",
                  padding: "0.4rem",
                  borderRadius: "3px",
                  fontSize: "14px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287l-3-3zm0 6h16v2H4z"
                  />
                </svg>
                Edit this post
              </Link>
            </div>

            <div className="related-blogs">
              <div
                className={`accordion ${isAccordionActive("") ? "active" : ""}`}
                onClick={() => handleAccordionClick("")}
              >
                Blogs with {post.frontmatter.tags.join(", ")} tag(s)
                <p>{` ${isAccordionActive("") ? "▲" : "▼ "}`}</p>
              </div>
              <AnimatePresence>
                {isAccordionActive("") && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                  >
                    {sortedSimilarTagArticles.length > 0 ? (
                      <ul>
                        {sortedSimilarTagArticles.map((article) => (
                          <li key={article.frontmatter.id}>
                            <div className="accordion-items">
                              <motion.div
                                initial="collapsed"
                                animate={
                                  isAccordionActive(article.frontmatter.id)
                                    ? "open"
                                    : "collapsed"
                                }
                                variants={{
                                  open: { opacity: 1, height: "auto" },
                                }}
                              >
                                <Link
                                  style={{
                                    fontWeight: "500",
                                  }}
                                  onClick={playClickSound}
                                  href={`/posts/${article.slug}`}
                                >
                                  {article.frontmatter.title}
                                </Link>
                                {isAccordionActive(article.frontmatter.id) && (
                                  <div className="accordion-content"></div>
                                )}
                              </motion.div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul>
                        <li>
                          <div className="accordion-items">
                            <motion.div
                              initial="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                              }}
                            >
                              <p
                                style={{
                                  color: "#aaa",
                                }}
                              >
                                No blogs found
                              </p>
                            </motion.div>
                          </div>
                        </li>
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="donateUs"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  marginBottom: "1rem",
                }}
                className="p-color"
              >
                I rely on your support to keep this website running. If you find
                the content valuable, please consider making a small donation.
                whether it’s ₹25/$1 or ₹500/$5.
              </p>
              <Link
                onClick={playClickSound}
                href="https://donate.stripe.com/fZeaGJeU23Cn9u8288"
                target="_blank"
                className="donateButton primary-btn-secondary"
                style={{
                  textAlign: "left",
                }}
              >
                Donate
              </Link>{" "}
              <p
                style={{
                  color: "#aaa",
                  fontSize: "0.8rem",
                  textAlign: "left",
                  marginTop: "0.6rem",
                }}
              >
                Secured by Stripe
              </p>
            </div>
            {toc.length > 0 && (
              <div className="tableOfContent" style={{ paddingBottom: "2rem" }}>
                <h2>On this page</h2>
                <ul>
                  {toc.map((item, index) => (
                    <li key={index}>
                      <Link onClick={playClickSound} href={`#${item.slug}`}>
                        {item.text}
                      </Link>
                      {item.children.length > 0 && (
                        <ul>
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link
                                onClick={playClickSound}
                                href={`#${child.slug}`}
                              >
                                {child.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
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
              <Link onClick={playClickSound} href="#topPage">
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
            <div
              className="sharePostBlock"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  marginBottom: "1rem",
                }}
                className="p-color"
              >
                Did you enjoyed the post?
              </p>

              <span>
                <Image
                  src={twitterLogo}
                  width={18}
                  height={18}
                  alt="Twitter (x)"
                  style={{
                    marginBottom: "-0.2rem",
                  }}
                />{" "}
                &nbsp;
                <Link
                  onClick={playClickSound}
                  href={twitterHref}
                  data-size="large"
                  target="_blank"
                  className="twitter-share-button p-color"
                >
                  Share on X
                </Link>{" "}
              </span>
              <div></div>
            </div>

            <div id="giscus-comments" />
            <hr className="styled-hr"></hr>
            <div className="post-navigation">
              <div className="prev">
                {prevArticleData && (
                  <Link
                    style={{
                      fontWeight: "500",
                    }}
                    onClick={playClickSound}
                    href={`/posts/${prevArticleData.slug}`}
                  >
                    👈 {prevArticleData.title}
                  </Link>
                )}
              </div>
              <div className="next">
                {nextArticleData && (
                  <Link
                    style={{
                      fontWeight: "500",
                    }}
                    onClick={playClickSound}
                    href={`/posts/${nextArticleData.slug}`}
                  >
                    {nextArticleData.title} 👉
                  </Link>
                )}
              </div>
            </div>
          </article>
          <Footer />
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

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  const { data: viewsData, error: viewsError } = await supabase
    .from("blog_views")
    .select("views")
    .eq("blog_id", frontmatter.id)
    .single();

  const readTime = calculateReadTime(contentHtml);
  const views = viewsData ? viewsData.views : 0;

  const similarTagArticles = articles.filter(
    (article) =>
      article.frontmatter.id !== frontmatter.id &&
      article.frontmatter.tags.some((tag) => frontmatter.tags.includes(tag))
  );

  // Convert date objects to strings only if it's a valid Date object
  const serializableSimilarTagArticles = similarTagArticles.map((article) => ({
    ...article,
    frontmatter: {
      ...article.frontmatter,
      date:
        article.frontmatter.date instanceof Date
          ? article.frontmatter.date.toISOString()
          : article.frontmatter.date,
    },
  }));

  return {
    props: {
      post: {
        frontmatter,
        content: contentHtml,
        views,
        readTime,
      },
      prevArticleData,
      nextArticleData,
      similarTagArticles: serializableSimilarTagArticles,
    },
  };
}
