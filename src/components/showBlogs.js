import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShowBlogs = () => {
  return (
    <>
      <section className="show-blog-div" id="showcaseBlogs">
        <div className="show-blog-title">
          <h2>#blogs</h2>
        </div>
        <div className="show-blog-container">
          {/* first show-blog card */}

          <div
            className="show-blog-card"
            style={{
              marginBottom: "1rem",
            }}
          >
            <Link href="/posts/keyframes---css-animation" passHref>
              <h2 className="show-blog-header">@keyframes - CSS Animation</h2>
            </Link>

            <p className="show-blog-text">Aug 24, 2023 </p>
          </div>
          {/* second blog card */}
          <div className="show-blog-card">
            <Link href="/posts/font-size-slider" passHref>
              <h2 className="show-blog-header">Font-size slider</h2>
            </Link>

            <p className="show-blog-text">Aug 22, 2023</p>
          </div>
        </div>
        <Link className="primary-btn" href="/posts">
          <p>read more &rarr;</p>
        </Link>
      </section>
    </>
  );
};

export default ShowBlogs;
