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

import Dialog from "@/src/components/Dialog";
import Layout from "@/src/components/Layout";

import { useState, useEffect } from "react";

import Head from "next/head";

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
      }, 10000);

      return () => clearTimeout(showPopupAfterDelay);
    }
  }, []);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <Layout>
      <Head></Head>
      <>
        {showDialog && <Dialog onClose={handleCloseDialog} className="show" />}
      </>
      <Component {...pageProps} />
    </Layout>
  );
}
