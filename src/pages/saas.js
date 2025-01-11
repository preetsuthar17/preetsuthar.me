import Link from "next/link";
import Head from "next/head";

import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import SaaS from "@/data/saas";

import { motion } from "motion/react";

export default function SaaSPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    show: {
      opacity: 1,
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
        <title>SaaS Projects - Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="SaaS Projects - Preet Suthar" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta property="og:url" content="https://preetsuthar.me/saas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/RqScUZ8.png" />
        <meta
          name="keywords"
          content="SaaS Projects - Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content="SaaS Projects - Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="SaaS Projects - Preet Suthar" />
        <meta
          name="twitter:description"
          content="My personal portfolio website."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "SaaS Projects - Preet Suthar",
            url: "https://preetsuthar.me/saas",
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
        className="flex flex-col gap-10 py-20 basics-prose [font:var(--type)]"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="text-muted-foreground flex items-center gap-1 text-sm underline"
          >
            <ArrowLeft size={12} /> Home
          </Link>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-3xl font-bold">
          SaaS Projects ({SaaS.length})
        </motion.h1>

        <motion.div variants={containerVariants} className="grid gap-4">
          {SaaS.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link
                href={project.link}
                className="flex justify-between gap-4 flex-wrap max-[500px]:gap-1 max-[500px]:flex-col"
              >
                <p className="font-medium flex items-center gap-2 max-[500px]:justify-between">
                  {project.title}
                  <span className="max-[370px]:hidden">
                    <ArrowUpRight size={14} />
                  </span>
                </p>
                <p className="text-muted-foreground max-[500px]:text-sm">
                  {project.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
