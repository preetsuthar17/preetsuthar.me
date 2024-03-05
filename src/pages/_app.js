import "@/styles/globals.scss";
import "@/styles/components/_navbar.scss";
import "@/styles/components/_footer.scss";
import "@/styles/components/_buttons.scss";
import "@/styles/components/_hero.scss";
import "@/styles/components/_about.scss";
import "@/styles/components/_reviews.scss";

import Head from "next/head";
import { Layout } from "@/components/Layout";
import { SmoothScroll } from "@/utils/functions/SmoothScroll";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&f[]=switzer@800,900&f[]=clash-grotesk@200,700,400,600,300,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SmoothScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SmoothScroll>
    </>
  );
}
