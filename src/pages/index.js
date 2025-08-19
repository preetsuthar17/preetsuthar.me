import { motion } from 'motion/react';
import Head from 'next/head';
import Contact from '@/components/Contact';
import Design from '@/components/Design';
import Header from '@/components/Header';
import Sponsors from '@/components/Sponsors';
import Work from '@/components/Work';
import Writing from '@/components/Writing';
import { getAllPosts } from '@/lib/blog';

export default function Home({ posts }) {
  return (
    <>
      <Head>
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
        </script>
      </Head>
      <div
        className="basics-prose flex flex-col gap-24 border border-t-0 border-b-0 py-20"
      >
        <Header />
        {/* divider */}
        <div className="relative h-6 border-y">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Work posts={posts} />
        {/* divider */}
        <div className="relative h-6 border-y">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Design />
        {/* divider */}
        <div className="relative h-6 border-y">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Writing posts={posts} />
        {/* divider */}
        <div className="relative h-6 border-y">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Sponsors />
        {/* divider */}
        <div className="relative h-6 border-y">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, #e4e4e7 0 1px, transparent 1px 10px)',
              opacity: 1,
            }}
          />
        </div>
        {/* divider */}
        <Contact />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
