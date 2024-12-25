import "../styles/globals.scss";

import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
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
        src="https://www.googletagmanager.com/gtag/js?id=G-Z16QM0TSSW"
        type="text/partytown"
      ></Script>
      <Link href="#main-content" className="sr-only focus:not-sr-only text-sm">
        Skip to main content
      </Link>
      <Component {...pageProps} />
    </>
  );
}
