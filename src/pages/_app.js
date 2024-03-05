import { Layout } from "@/components/Layout";
import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&f[]=switzer@800,900&f[]=clash-grotesk@200,700,400,600,300,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
