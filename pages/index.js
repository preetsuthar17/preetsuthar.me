import Showcase from "@/src/components/showcase";
import Head from "next/head";

import Layout from "@/src/components/Layout";

export default function Home() {
  return (
    <Layout style={{ backgroundColor: "#080809" }}>
      <Head>
        <title>Preet Suthar 🚀 | Front-end developer</title>
        <meta name="robots" content="all"/>

        <meta
          name="description"
          content="Preet's personal portfolio and blog website."
        />
        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          property="og:title"
          content="Preet Suthar 🚀 | Front-end developer"
        />
        <meta
          property="og:description"
          content="Preet's personal portfolio and blog website."
        />
        <meta property="og:url" content="https://preetsuthar.me" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="twitter:title"
          content="Preet Suthar 🚀 | Front-end developer"
        />
        <meta
          name="twitter:description"
          content="Preet's personal portfolio and blog website."
        />{" "}
        <meta name="subject" content="web development" />
      </Head>

      <main>
        <Showcase />
      </main>
    </Layout>
  );
}
