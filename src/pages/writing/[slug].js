import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog";

import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

import { TableOfContents } from "@/components/writings/toc";

import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
// Load languages you want to support
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";

export default function BlogPost({ post, prevPost, nextPost }) {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(progress);

      setShowButton(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <Head>
        <title>{post.title} - Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content={`${post.excerpt}`} />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content={`${post.title} - Preet Suthar`} />
        <meta property="og:description" content={`${post.excerpt}`} />
        <meta property="og:url" content="https://preetsuthar.me/writings" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/Pwhm0a2.png" />
        <meta
          name="keywords"
          content=" SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content={`${post.title} - Preet Suthar`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content={`${post.title} - Preet Suthar`} />
        <meta name="twitter:description" content={`${post.excerpt}`} />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: `${post.title} - Preet Suthar`,
            url: "https://preetsuthar.me/writings",
            image: "https://preetsuthar.me/website-icon.webp",
            sameAs: [
              "https://www.linkedin.com/in/preetsuthar17/",
              "https://github.com/preetsuthar17",
              "https://x.com/nott_preet",
              "https://preetsuthar.me",
              "https://discord.com/users/741549223127941170",
            ],
            jobTitle: "SaaS Creator",
          })}
        </script>
      </Head>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-zinc-900 z-50"
        style={{ width: `${progress}%` }}
      />

      <article className="flex flex-col gap-10 basics-prose mx-auto py-20">
        <div>
          <Link
            href="/writings"
            className="text-muted-foreground flex items-center gap-1 text-sm underline"
          >
            <ArrowLeft size={12} /> Index
          </Link>
        </div>
        <div className="dark:prose-invert max-w-none flex flex-col gap-2">
          <h1 className="text-4xl font-bold font-inter">{post.title}</h1>
          <div className="flex gap-3">
            <small className="text-muted-foreground">
              {new Date(post.date).toLocaleDateString()}
            </small>
            <small>•</small>
            <small className="text-muted-foreground">{post.author}</small>
            <small>•</small>
            <small className="text-muted-foreground">
              {readingTime} min read
            </small>
          </div>
          <TableOfContents headings={post.headings} />
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            suppressHydrationWarning
          />
        </div>
      </article>

      {/* blog navigation */}
      <nav className="container mx-auto px-4 py-8 border-t">
        <div className="flex justify-between items-center gap-4">
          {prevPost ? (
            <Link href={`/writing/${prevPost.slug}`} className="flex-1 group">
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm">Previous</span>
              </div>
              <p className="text-lg font-medium mt-1 line-clamp-1">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextPost ? (
            <Link
              href={`/writing/${nextPost.slug}`}
              className="flex-1 text-right group"
            >
              <div className="flex items-center justify-end gap-2 text-muted-foreground group-hover:text-primary">
                <span className="text-sm">Next</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <p className="text-lg font-medium mt-1 line-clamp-1">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </nav>

      {/* scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 w-10 h-10 transition-all duration-300 ease-in-out bg-zinc-900 rounded-full text-white text-center justify-center flex-col items-center flex ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m11 7.825l-4.9 4.9q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7l6.6-6.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l6.6 6.6q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L13 7.825V19q0 .425-.288.713T12 20t-.712-.288T11 19z"
          />
        </svg>
      </button>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts();
  const currentPost = getPostBySlug(params.slug);
  const { html, headings } = await markdownToHtml(currentPost.content);

  // Find current post index
  const currentIndex = posts.findIndex((post) => post.slug === params.slug);

  // Get previous and next posts
  const prevPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return {
    props: {
      post: {
        ...currentPost,
        content: html,
        headings: headings,
      },
      prevPost: prevPost
        ? {
            title: prevPost.title,
            slug: prevPost.slug,
          }
        : null,
      nextPost: nextPost
        ? {
            title: nextPost.title,
            slug: nextPost.slug,
          }
        : null,
    },
  };
}
