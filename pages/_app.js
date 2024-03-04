import "../src/styles/globals.scss";
import "../src/styles/partials/_about.scss";
import "../src/styles/partials/_navbar.scss";
import "../src/styles/partials/_projects.scss";
import "../src/styles/partials/_showcase.scss";
import "../src/styles/partials/_blogsPage.scss";
import "../src/styles/partials/_reviewSec.scss";
import "../src/styles/partials/_footer.scss";
import "../src/styles/partials/_reviewsSkeletonCard.scss";
import "../src/styles/partials/_buttons.scss";
import "../src/styles/partials/_customTooltip.scss";
import "../src/styles/partials/_postPage.scss";
import "../src/styles/partials/_404.scss";
import "../src/styles/partials/_CourseSnackBar.scss";
import "../src/styles/partials/_CustomCursor.scss";
import "../src/styles/partials/_EyeFollowingMouse.scss";
import "../src/styles/partials/_showcase_projects.scss";
import "../src/styles/partials/_freelancePage.scss";
import "../src/styles/tokyo-night-dark.css";

import Layout from "@/src/components/Layout";
import CustomCursor from "../src/components/CustomCursor";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.3, transition: "ease-in" }}
    >
      <Layout>
        <CustomCursor />
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}
