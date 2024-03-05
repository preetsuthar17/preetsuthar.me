import "@/styles/globals.scss";
import "@/styles/components/_navbar.scss";
import "@/styles/components/_footer.scss";
import "@/styles/components/_buttons.scss";
import "@/styles/components/_hero.scss";
import "@/styles/components/_about.scss";
import "@/styles/components/_reviews.scss";
import "@/styles/components/_projects.scss";

import { Layout } from "@/components/Layout";
import { SmoothScroll } from "@/utils/functions/SmoothScroll";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SmoothScroll>
    </>
  );
}
