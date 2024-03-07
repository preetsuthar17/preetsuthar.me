import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollToTopButton } from "./other/ScrollToTopButton";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children }) => {
  return (
    <>
      <span id="home"></span>
      <Navbar />
      <Toaster/>
      <main>{children}</main>
      <ScrollToTopButton/>
      <Footer />
    </>
  );
};
