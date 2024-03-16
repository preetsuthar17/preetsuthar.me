import "@/styles/globals.scss";
import "@/styles/404.scss";
import "@/styles/components/_intro_curtain.scss";
import "@/styles/components/_buttons.scss";
import "@/styles/components/_navbar.scss";
import "@/styles/components/_hero.scss";
import "@/styles/components/_about.scss";
import "@/styles/components/_reviews.scss";
import "@/styles/components/_projects.scss";
import "@/styles/components/_services.scss";
import "@/styles/components/_contact_form.scss";
import "@/styles/components/_contact.scss";
import "@/styles/components/_footer.scss";
import "@/styles/components/_templates.scss";

import { Layout } from "@/components/Layout";
import ReactLenis from "@studio-freight/react-lenis";
import { Providers } from "@/components/Providers";
import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z16QM0TSSW"
          type="text/partytown"
        ></script>
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z16QM0TSSW');
            `,
          }}
        />
      </Head>
      <svg className="grainy-filter pointer-events-none absolute cursor-none ">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <Providers>
        <ReactLenis
          root
          options={{
            duration: 1.5,
            SmoothScroll: true,
            smoothWheel: true,
            syncTouch: true,
            smoothTouch: true,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReactLenis>
      </Providers>
    </>
  );
}
