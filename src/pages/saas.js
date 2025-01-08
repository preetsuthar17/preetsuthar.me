import Link from "next/link";
import Head from "next/head";

import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import SaaS from "@/data/saas";

export default function SaaSPage() {
  return (
    <>
      <Head>
        <title>SaaS Projects - Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="SaaS Projects - Preet Suthar" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta
          property="og:url"
          content="https://preetsuthar.me/SaaS Projects"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/Pwhm0a2.png" />
        <meta
          name="keywords"
          content="SaaS Projects - Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content="SaaS Projects - Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="SaaS Projects - Preet Suthar" />
        <meta
          name="twitter:description"
          content="My personal portfolio website."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "SaaS Projects - Preet Suthar",
            url: "https://preetsuthar.me/SaaS Projectss",
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
      <div className="flex flex-col gap-10 py-20 basics-prose [font:var(--type)]">
        <div>
          <Link
            href="/"
            className="text-muted-foreground flex items-center gap-1 text-sm underline"
          >
            <ArrowLeft size={12} /> Home
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold  mb-8">
              SaaS SaaS Projects ({SaaS.length})
            </h1>
            <div className="flex flex-col gap-4">
              {SaaS.map((project) => (
                <article key={project.id} className="group">
                  <Link
                    href={`${project.link}`}
                    className="flex justify-between gap-4 flex-wrap max-[500px]:gap-1 max-[500px]:flex-col"
                  >
                    <p className="font-medium  flex items-center gap-2 max-[500px]:justify-between">
                      {project.title}{" "}
                      <span className="max-[370px]:hidden">
                        <ArrowUpRight size={14} />
                      </span>
                    </p>
                    <p className="text-muted-foreground max-[500px]:text-sm">
                      {project.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
