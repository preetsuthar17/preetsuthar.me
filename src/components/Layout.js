import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <span id="home"></span>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
