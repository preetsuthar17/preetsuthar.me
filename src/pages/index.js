import Head from "next/head";

import { getAllPosts } from "@/lib/blog";

import Header from "@/components/Header";
import Work from "@/components/Work";
import About from "@/components/About";
import Connect from "@/components/Connect";

export default function Home({ posts }) {
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
        <meta property="og:image" content="https://i.imgur.com/Pwhm0a2.png" />
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
      <div className="flex flex-col gap-10 py-20 basics-prose [font:var(--type)]">
        <Header />
        <Work posts={posts} />
        <About />
        <Connect />
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
