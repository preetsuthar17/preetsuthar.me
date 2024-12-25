import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  function getInitialTheme() {
                    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                      return localStorage.getItem('theme');
                    }
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      return 'dark';
                    }
                    return 'light';
                  }
                  
                  const theme = getInitialTheme();
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                })();
              `,
          }}
        />
        <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
        <link
          rel="preconnect"
          href="https://preetsuthar.me/cdn-cgi/"
          crossOrigin="anonymous"
        />
      </Head>
      <body antialiased>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
