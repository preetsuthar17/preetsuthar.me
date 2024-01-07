import "../src/styles/globals.scss";
import "../src/styles/partials/_about.scss";
import "../src/styles/partials/_navbar.scss";
import "../src/styles/partials/_projects.scss";
import "../src/styles/partials/_showcase.scss";
import "../src/styles/partials/_blogsPage.scss";
import "../src/styles/partials/_reviewSec.scss";
import "../src/styles/partials/_footer.scss";
import "../src/styles/partials/_reviewsSkeletonCard.scss";
import "../src/styles/partials/_loadingBar.scss";
import "../src/styles/partials/_buttons.scss";
import "../src/styles/partials/_customTooltip.scss";
import "../src/styles/partials/_postPage.scss";
import "../src/styles/partials/_404.scss";
import "../src/styles/partials/_CourseSnackBar.scss";
import "../src/styles/partials/_CustomCursor.scss";

import Layout from "@/src/components/Layout";
import CustomCursor from "../src/components/CustomCursor";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const dialogShownInThisSession = sessionStorage.getItem(
      "dialogShownInThisSession"
    );
    if (!dialogShownInThisSession) {
      const showPopupAfterDelay = setTimeout(() => {
        setShowDialog(true);
        sessionStorage.setItem("dialogShownInThisSession", true);
      }, 11000);

      return () => clearTimeout(showPopupAfterDelay);
    }
  }, []);

  if (showDialog == true) {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        setShowDialog(false);
      }
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3, transition: "ease-in" }}
    >
      <Layout>
        <Head></Head>
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-PXPK7RW6DG" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PXPK7RW6DG');
        `}
          </Script>
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="preetsuthar"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#FF813F"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
          ></script>
        </>
        <CustomCursor />
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}
