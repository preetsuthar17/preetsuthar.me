import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta content="DPR, Width, Viewport-Width" httpEquiv="Accept-CH" />
        <link
          crossOrigin="anonymous"
          href="https://preetsuthar.me/cdn-cgi/"
          rel="preconnect"
        />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
      </Head>
      <body antialiased="true">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
