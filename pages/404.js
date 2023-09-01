import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Oops!</title>
        <meta name="robots" content="noindex"/>

      </Head>
      <Navbar />
      <div className="notFoundDiv">
        <h2>404</h2>
        <p className="p-color">You&apos;re on wrong path!</p>
      </div>
      <Footer />
    </>
  );
}
