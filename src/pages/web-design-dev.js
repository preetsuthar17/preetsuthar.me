import Link from "next/link";
import Head from "next/head";

import { ArrowLeft } from "lucide-react";

import webDesignDev from "@/data/web-design-dev";
import designs from "@/data/designs";

import { OptimizedImage } from "@/components/OptimizedImage";

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
          Web Design & Dev Work ({webDesignDev.length + designs.length})
        </motion.h1>
        <motion.div className="flex-1 flex flex-col items-start justify-start gap-6">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full grow"
          >
            {designs.map((design, index) => (
              <motion.article
                variants={itemVariants}
                key={index}
                className="relative cursor-pointer group overflow-hidden"
                onClick={() => window.open(design.dribbble, "_blank")}
              >
                <OptimizedImage
                  src={design.image}
                  alt={design.title}
                  width={300}
                  height={300}
                  className="rounded-xl w-full h-auto aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-xl text-center p-4 duration-300">
                  <p className="text-white font-medium">{design.title}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <motion.div variants={containerVariants} className="grid gap-6">
            {webDesignDev.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-start text-left rounded-xl transition-all gap-3 cursor-pointer w-full group"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    width={1920}
                    height={1080}
                    alt={project.title}
                    className="rounded-xl grow max-w-full w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-xl text-center p-4 duration-300">
                    <div className="text-white text-center p-4">
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm opacity-80">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
