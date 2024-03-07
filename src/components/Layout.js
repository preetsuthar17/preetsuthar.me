import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollToTopButton } from "./other/ScrollToTopButton";

export const Layout = ({ children }) => {
  return (
    <>
      <span id="home"></span>
      <Navbar />
      <main>{children}</main>
      <ScrollToTopButton/>
      <Footer />
    </>
  );
};
