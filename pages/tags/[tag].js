import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { motion } from "framer-motion";

import Head from "next/head";

import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";

const Tag = ({ blogs }) => {
  const router = useRouter();
  const { tag } = router.query;

  if (!tag) {
    return <div>Loading...</div>;
  }

  const filteredBlogs = blogs
    .filter(
      (blog) =>
        Array.isArray(blog.frontmatter.tags) &&
        blog.frontmatter.tags.includes(tag)
    )
    .map((blog) => ({
      tag: blog.frontmatter.tags || [],
      title: blog.frontmatter.title || "",
      slug: blog.slug,
      description: blog.frontmatter.description || "",
      date: blog.frontmatter.date || "",
    }));

  return (
    <>
      <Head>
        <title>Tag {tag} 🚀</title>
        <meta name="robots" content="all" />

        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content={tag} />
        <meta property="og:url" content="https://preetsuthar.me/tags" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content={tag} />
        <meta name="subject" content="web development" />
      </Head>
      <Navbar />
      <div id="blog-title" className="blog-div">
        <motion.div
          initial={{ opacity: 1, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="blog-headers">
            <div className="blog-title">
              <h1>&#47;{tag}</h1>
            </div>
            <div className="blog-header-text">
              <p>Posts tagged with "{tag}"</p>
            </div>
          </div>
        </motion.div>

        <div className="styled-hr"></div>

        <h1
          style={{
            opacity: 0,
          }}
        >
          Blogs tagged with {tag}
        </h1>

        <motion.div
          initial={{ opacity: 1, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="blog-container">
            {filteredBlogs.map((blog, index) => (
              <div key={index}>
                <div className="blog-card">
                  <Link href={`/posts/${blog.slug}`}>
                    <h2
                      className="blog-header"
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      {blog.title}
                    </h2>
                  </Link>
                  <p
                    className="blog-text blog-date"
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    {blog.date}
                  </p>
                  <div
                    style={{
                      marginTop: "0.6rem",
                    }}
                  >
                    <Link href={`/posts/${blog.slug}`} passHref>
                      Read article &rarr;
                    </Link>
                  </div>
                  <div className="p-color post-tag"> {blog.tag.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Tag;

export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const allTags = fileNames.reduce((tags, fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    if (data.tags && Array.isArray(data.tags)) {
      tags.push(...data.tags);
    }

    return tags;
  }, []);

  const uniqueTags = [...new Set(allTags)];

  const paths = uniqueTags.map((tag) => ({
    params: { tag },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      frontmatter: {
        tags: data.tags || [],
        title: data.title || "",
        description: data.description || "",
        date: formatDate(data.date.toString()),
      },
      slug: fileName.replace(/\.md$/, ""),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

function formatDate(date) {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );
  return formattedDate;
}
