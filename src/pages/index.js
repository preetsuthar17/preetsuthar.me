import { Header } from "@/components/Header";
import { Projects } from "@/components/Projcts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Preet Suthar 🚀 - Creative Front-end developer</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          property="og:title"
          content="Preet Suthar 🚀 - Creative Front-end developer"
        />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta property="og:url" content="https://preetsuthar.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/Pwhm0a2.png" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="twitter:title"
          content="Preet Suthar 🚀 - Creative Front-end developer"
        />
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
              "https://x.com/preetsuthar17",
              "https://preetsuthar.me",
              "https://dsc.gg/preet",
            ],
            jobTitle: "Creative Front-end developer",
          })}
        </script>
      </Head>
      <Header />
      <Projects />
    </>
  );
}
