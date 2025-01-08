import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";

import webDesignDev from "@/data/web-design-dev";

import { motion } from "motion/react";

export default function WebDesignDev() {
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
        <title>Web Design & Dev - Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Web Design & Dev - Preet Suthar" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta
          property="og:url"
          content="https://preetsuthar.me/web-design-dev"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/RqScUZ8.png" />
        <meta
          name="keywords"
          content="Web Design & Dev - Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content="Web Design & Dev - Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Web Design & Dev - Preet Suthar" />
        <meta
          name="twitter:description"
          content="My personal portfolio website."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Web Design & Dev - Preet Suthar",
            url: "https://preetsuthar.me/web-design-dev",
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
          Web Design & Dev Work({webDesignDev.length})
        </motion.h1>

        <motion.div variants={containerVariants} className="grid gap-12">
          {webDesignDev.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="flex flex-col items-start text-left rounded-xl transition-all gap-3 cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="relative rounded-xl">
                <Image
                  src={project.image}
                  width={1920}
                  height={1080}
                  alt={project.title}
                  className="rounded-xl grow max-w-full w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start gap-3">
                  <Link
                    className="flex items-start gap-1 font-medium  justify-between w-full"
                    target="_blank"
                    href={project.link}
                  >
                    {project.title}
                  </Link>
                  <p className="text-sm opacity-80">{project.description}</p>
                </div>
                <FiArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
