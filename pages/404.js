const Navbar = dynamic(() => import("@/src/components/navbar"));
const Footer = dynamic(() => import("@/src/components/footer"));

import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Oops!</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <div className="notFoundDiv">
        <h1>404</h1>
        <p className="p-color">You&apos;re on wrong path!</p>
      </div>
      <Footer />
    </>
  );
}
