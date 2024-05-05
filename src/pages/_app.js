import { Layout } from "@/components/Layout";
import "@/styles/globals.scss";
import "@splidejs/react-splide/css";

import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z16QM0TSSW"
          type="text/partytown"
        ></script>
        <Script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z16QM0TSSW');
            `,
          }}
        />
      </Head>
      <Script
        async
        src="https://eu.umami.is/script.js"
        data-website-id="b59ea046-ed0b-4f4e-ac6e-cf9606ff6f15"
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
