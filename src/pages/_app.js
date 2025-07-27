import '../styles/globals.css';

import { Partytown } from '@builder.io/partytown/react';
import { GoogleAnalytics } from '@next/third-parties/google';
// Change font import here
import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-170WY51KQ8');
            `,
          }}
          type="text/partytown"
        />
        <title>Preet Suthar</title>
        <meta content="all" name="robots" />
        <meta content="My personal portfolio website." name="description" />
        <meta content="#fffffff" name="theme-color" />
        <meta content="en" httpEquiv="content-language" />
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <meta content="Preet Suthar" property="og:title" />
        <meta
          content="My personal portfolio website."
          property="og:description"
        />
        <meta content="https://preetsuthar.me" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="https://i.imgur.com/RqScUZ8.png" property="og:image" />
        <meta
          content="Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
          name="keywords"
        />
        <meta content="Preet Suthar" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Preet Suthar" name="twitter:title" />
        <meta
          content="My personal portfolio website."
          name="twitter:description"
        />{' '}
        <meta content="web development" name="subject" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Preet Suthar',
            url: 'https://preetsuthar.me',
            image: 'https://preetsuthar.me/website-icon.webp',
            sameAs: [
              'https://www.linkedin.com/in/preetsuthar17/',
              'https://github.com/preetsuthar17',
              'https://x.com/nott_preet',
              'https://preetsuthar.me',
              'https://discord.com/users/741549223127941170',
            ],
            jobTitle: 'SaaS Creator',
          })}
        </script>{' '}
        <script defer src="https://assets.onedollarstats.com/stonks.js" />
      </Head>

      <Link className="sr-only text-sm focus:not-sr-only" href="#main-content">
        Skip to main content
      </Link>
      <Component
        {...pageProps}
        className={`${jetBrains_Mono.className} ${jetBrains_Mono.variable}`}
      />
      <GoogleAnalytics gaId="G-170WY51KQ8" />
    </>
  );
}
