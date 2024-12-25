import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export default function blogs({ posts }) {
  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date.split("-")[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Get sorted years (newest first)
  const years = Object.keys(postsByYear).sort((a, b) => b - a);

  return (
    <>
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
            <h1 className="text-3xl font-bold mb-8 font-inter">Writing</h1>
            {years.map((year) => (
              <div key={year} className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-muted-foreground">
                  {year}
                </h2>
                <div className="flex flex-col gap-4">
                  {postsByYear[year].map((post) => (
                    <article key={post.slug} className="group">
                      <Link
                        href={`/writing/${post.slug}`}
                        className="flex justify-between gap-4 flex-wrap"
                      >
                        <p className="text-muted-foreground underline">
                          {post.title}
                        </p>
                        <p className="text-muted-foreground">{post.date}</p>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
