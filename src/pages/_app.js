import { Layout } from "@/components/Layout";
import "@/styles/globals.scss";
import "@splidejs/react-splide/css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
