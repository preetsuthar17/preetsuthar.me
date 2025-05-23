import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
        <link
          rel="preconnect"
          href="https://preetsuthar.me/cdn-cgi/"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body antialiased="true">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
