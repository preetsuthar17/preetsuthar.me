import { Layout } from "@/components/Layout";
import "@/styles/globals.scss";
import "swiper/css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
