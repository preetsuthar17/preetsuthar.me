import "../styles/globals.css";

import { Partytown } from "@builder.io/partytown/react";

import { GoogleAnalytics } from "@next/third-parties/google";

import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

import { Geist_Mono } from "next/font/google";

const geist_Mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

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
              gtag('config', 'G-170WY51KQ8');
            `,
          }}
        />
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
        <meta property="og:image" content="https://i.imgur.com/RqScUZ8.png" />
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

      <Link href="#main-content" className="sr-only focus:not-sr-only text-sm">
        Skip to main content
      </Link>
      <Component
        {...pageProps}
        className={`${geist_Mono.className} ${geist_Mono.variable}`}
      />
      <GoogleAnalytics gaId="G-170WY51KQ8" />
    </>
  );
}
