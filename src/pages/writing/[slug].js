import { ArrowUpLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TableOfContents } from '@/components/writings/toc';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/blog';

import 'prismjs/themes/prism-tomorrow.css';
import Prism from "prismjs";
// Load languages you want to support
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import AskAIButton from '@/components/writings/ask-ai-button';
import CopyMarkdownButton from '@/components/writings/copy-markdown';

export default function BlogPost({ post, prevPost, nextPost, markdown }) {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <title>{`${post.title} - Preet Suthar`}</title>
        <meta content="all" name="robots" />
        <meta content={`${post.excerpt}`} name="description" />
        <meta content="#fffffff" name="theme-color" />
        <meta content="en" httpEquiv="content-language" />
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <meta content={`${post.title} - Preet Suthar`} property="og:title" />
        <meta content={`${post.excerpt}`} property="og:description" />
        <meta content="https://preetsuthar.me/writings" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="https://i.imgur.com/RqScUZ8.png" property="og:image" />
        <meta
          content=" SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
          name="keywords"
        />
        <meta content={`${post.title} - Preet Suthar`} name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content={`${post.title} - Preet Suthar`} name="twitter:title" />
        <meta content={`${post.excerpt}`} name="twitter:description" />{' '}
        <meta content="web development" name="subject" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: `${post.title} - Preet Suthar`,
            url: 'https://preetsuthar.me/writings',
            image: 'https://preetsuthar.me/website-icon.webp',
            sameAs: [
              'https://www.linkedin.com/in/preetsuthar17/',
              'https://github.com/preetsuthar17',
              'https://x.com/nott_preet',
              'https://preetsuthar.me',
              'https://discord.com/users/741549223127941170',
            ],
            jobTitle: 'SaaS Creator',
          })}
        </script>
        {/* Inject raw markdown for copy button */}
        <script
          dangerouslySetInnerHTML={{
            __html: markdown ? markdown.replace(/<\//g, '<\\/') : '',
          }}
          id="__MARKDOWN__"
          type="text/plain"
        />
      </Head>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-zinc-900"
        style={{ width: `${progress}%` }}
      />

      <main className="basics-prose mx-auto flex flex-col gap-10 border border-t-0 border-b-0 py-20 ">
        <div className="px-10 ">
          <Link
            className="flex w-fit items-center gap-1 text-muted-foreground text-sm underline"
            href="/"
          >
            <ArrowUpLeft size={12} /> Home
          </Link>
        </div>
        <div className="dark:prose-invert flex max-w-none flex-col gap-2">
          {/* divider */}
          <div className="relative h-6 border-y">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
                opacity: 1,
              }}
            />
          </div>
          {/* divider */}
          <div className="flex flex-col gap-4 py-14">
            <h1 className="px-10 font-semibold text-4xl text-[var(--blue-color)] ">
              {post.title}
            </h1>

            <div className="flex flex-col gap-4 px-10">
              <div className="flex flex-wrap gap-2">
                <small className="text-muted-foreground">
                  {(() => {
                    const date = new Date(post.date);
                    const day = date.getDate();
                    const month = date
                      .toLocaleString('en-US', { month: 'long' })
                      .toLowerCase();
                    const year = date.getFullYear();
                    return `${day} ${month}, ${year}`;
                  })()}
                </small>
                <small>•</small>
                <small className="text-muted-foreground">{post.author}</small>
                <small>•</small>
                <small className="text-muted-foreground">
                  {readingTime} min read
                </small>
              </div>
              <div className="flex flex-wrap gap-2">
                <AskAIButton />
                <CopyMarkdownButton markdown={markdown} />
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="relative h-6 border-y">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
                opacity: 1,
              }}
            />
          </div>
          {/* divider */}

          <TableOfContents headings={post.headings} />
          <article>
            <div
              className="prose max-w-none px-10 py-10 text-justify max-sm:text-pretty"
              dangerouslySetInnerHTML={{ __html: post.content }}
              suppressHydrationWarning
            />
          </article>
        </div>
        {/* blog navigation */}
        <nav className="container mx-auto border-t px-4 py-8 pb-20">
          <div className="flex items-center justify-between gap-4">
            {prevPost
              ? <Link
                  className="group flex-1"
                  href={`/writing/${prevPost.slug}`}
                >
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="text-sm">Previous</span>
                  </div>
                  <p className="mt-1 line-clamp-1 font-medium text-lg">
                    {prevPost.title}
                  </p>
                </Link>
              : <div className="flex-1" />}

            {nextPost
              ? <Link
                  className="group flex-1 text-right"
                  href={`/writing/${nextPost.slug}`}
                >
                  <div className="flex items-center justify-end gap-2 text-muted-foreground group-hover:text-primary">
                    <span className="text-sm">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="mt-1 line-clamp-1 font-medium text-lg">
                    {nextPost.title}
                  </p>
                </Link>
              : <div className="flex-1" />}
          </div>
        </nav>
      </main>

      {/* scroll to top button */}
      <button
        className={`fixed right-4 bottom-4 flex h-10 w-10 flex-col items-center justify-center rounded-ele bg-zinc-900 text-center text-white transition-all duration-300 ease-in-out ${
          showButton
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-10 opacity-0'
        }`}
        onClick={scrollToTop}
      >
        <svg
          height="25"
          viewBox="0 0 24 24"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11 7.825l-4.9 4.9q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7l6.6-6.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l6.6 6.6q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L13 7.825V19q0 .425-.288.713T12 20t-.712-.288T11 19z"
            fill="currentColor"
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
        headings,
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
      markdown: currentPost.content,
    },
  };
}
