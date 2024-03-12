import { Templates } from "@/components/Templates";
import Head from "next/head";

const templates = () => {
  return (
    <>
      <Head>
        <title>
          {" "}
          Templates ✨ | Buy ready to use website templates with very affordable
          price.
        </title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content=" Buy ready to use website templates with very affordable
          price."
        />
        <meta name="theme-color" content="#e5e5e0" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          property="og:title"
          content=" Templates ✨ | Buy ready to use website templates with very affordable
          price."
        />
        <meta
          property="og:description"
          content=" Buy ready to use website templates with very affordable
          price."
        />
        <meta property="og:url" content="https://preetsuthar.me/templates" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://preetsuthar.me/website-icon.webp"
        />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="twitter:title"
          content=" Templates ✨ | Buy ready to use website templates with very affordable
          price."
        />
        <meta
          name="twitter:description"
          content=" Buy ready to use website templates with very affordable
          price."
        />{" "}
        <meta name="subject" content="web development" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z16QM0TSSW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z16QM0TSSW');
            `,
          }}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Preet Suthar",
            url: "https://preetsuthar.me/templates",
            image: "https://preetsuthar.me/website-icon.webp",
            sameAs: [
              "https://www.linkedin.com/in/preetsuthar17/",
              "https://github.com/preetsuthar17",
              "https://x.com/preetsuthar17",
              "https://preetsuthar.me",
              "https://dsc.gg/preet",
            ],
            jobTitle: "Front-end developer/designer",
          })}
        </script>
      </Head>
      <Templates />
    </>
  );
};

export default templates;
