import "@/styles/globals.scss";
import "@/styles/404.scss";
import "@/styles/projects_page.scss";
import "@/styles/components/_buttons.scss";
import "@/styles/components/_navbar.scss";
import "@/styles/components/_hero.scss";
import "@/styles/components/_about.scss";
import "@/styles/components/_reviews.scss";
import "@/styles/components/_projects.scss";
import "@/styles/components/_services.scss";
import "@/styles/components/_contact.scss";
import "@/styles/components/_footer.scss";

import { Layout } from "@/components/Layout";
import { SmoothScroll } from "@/utils/functions/SmoothScroll";
import { Providers } from "@/components/Providers";

export default function App({ Component, pageProps }) {
  return (
    <>
      <svg className="grainy-filter pointer-events-none absolute cursor-none ">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <SmoothScroll>
        <Providers>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Providers>
      </SmoothScroll>
    </>
  );
}
