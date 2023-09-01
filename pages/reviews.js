import ReviewForm from "@/src/components/ReviewForm";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import Layout from "@/src/components/Layout";

import Head from "next/head";

const reviewPage = () => {
  return (
    <Layout>
      <Head>
        <title>Review | Preet Suthar 🚀</title>
        <meta name="robots" content="all"/>

        <meta name="description" content="Review page" />
        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Review | Preet Suthar 🚀" />
        <meta property="og:description" content="Review page" />
        <meta property="og:url" content="https://preetsuthar.me/reviews" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, front end development, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Review | Preet Suthar 🚀 " />
        <meta name="twitter:description" content="Review page" />{" "}
        <meta name="subject" content="web development" />
      </Head>
      <Navbar />
      <ReviewForm />
      <Footer />
    </Layout>
  );
};

export default reviewPage;
