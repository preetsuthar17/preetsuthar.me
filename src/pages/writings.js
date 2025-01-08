import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import Head from "next/head";

import { motion } from "motion/react";

export default function blogs({ posts }) {
  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date.split("-")[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Get sorted years (newest first)
  const years = Object.keys(postsByYear).sort((a, b) => b - a);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const yearVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const postVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Head>
        <title>Writings - Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Writings - Preet Suthar" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta property="og:url" content="https://preetsuthar.me/writings" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/RqScUZ8.png" />
        <meta
          name="keywords"
          content="Writings - Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content="Writings - Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Writings - Preet Suthar" />
        <meta
          name="twitter:description"
          content="My personal portfolio website."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Writings - Preet Suthar",
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
      <div className="flex flex-col gap-10 py-20 basics-prose [font:var(--type)]">
        <div>
          <Link
            href="/"
            className="text-muted-foreground flex items-center gap-1 text-sm underline"
          >
            <ArrowLeft size={12} /> Home
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="container mx-auto"
          >
            <motion.h1
              variants={yearVariants}
              className="text-3xl font-bold mb-8"
            >
              Writings ({posts.length})
            </motion.h1>
            {years.map((year) => (
              <motion.div key={year} variants={yearVariants} className="mb-8">
                <motion.h2
                  variants={postVariants}
                  className="text-xl font-semibold mb-4 text-muted-foreground bg-gray-100 rounded-md p-4"
                >
                  {year}
                </motion.h2>
                <motion.div className="flex flex-col gap-4">
                  {postsByYear[year].map((post) => (
                    <motion.article
                      key={post.slug}
                      variants={postVariants}
                      className="group"
                    >
                      <Link
                        href={`/writing/${post.slug}`}
                        className="flex justify-between gap-4 flex-wrap max-[500px]:gap-1 max-[500px]:flex-col"
                      >
                        <p className="font-medium flex items-center gap-2 max-[500px]:justify-between">
                          {post.title}
                          <span className="max-[370px]:hidden">
                            <ArrowUpRight size={14} />
                          </span>
                        </p>
                        <p className="text-muted-foreground max-[500px]:text-sm">
                          {post.date}
                        </p>
                      </Link>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
