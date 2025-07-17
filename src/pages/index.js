import Head from "next/head";

import { getAllPosts } from "@/lib/blog";

import Header from "@/components/Header";
import Work from "@/components/Work";
import Writing from "@/components/Writing";

import { motion } from "motion/react";
import Contact from "@/components/Contact";

export default function Home({ posts }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      filter: "blur(10px)",
      y: 20,
    },
    show: {
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Preet Suthar" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta property="og:url" content="https://preetsuthar.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/RqScUZ8.png" />
        <meta
          name="keywords"
          content="Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Preet Suthar" />
        <meta
          name="twitter:description"
          content="My personal portfolio website."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Preet Suthar",
            url: "https://preetsuthar.me",
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col py-20 basics-prose gap-24 border border-t-0 border-b-0"
      >
        <Header />
        {/* divider */}
        <div className="h-6 border-y relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)",
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Work posts={posts} />
        {/* divider */}
        <div className="h-6 border-y relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)",
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Writing posts={posts} />
        {/* divider */}
        <div className="h-6 border-y relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)",
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Contact />
      </motion.div>
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
