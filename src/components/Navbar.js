import Image from "next/image";
import website_logo from "../../public/website_logo.svg";
import Link from "next/link";
import SmoothScrollLink from "./other/SmoothLinkScroll";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar_icon section-1">
          <Image src={website_logo} width={45} height={45} alt="Preet Suthar" />
        </Link>
        <section className="section-2">
          <div className="open_for_work">
            <SmoothScrollLink href="#contact" className="transforming-link">
              <span>Open for work</span>
              <span>Open for work</span>
            </SmoothScrollLink>
          </div>
          <div className="navbar_links">
            <ul>
              <li className="navbar_link">
                <SmoothScrollLink href="#" className="transforming-link">
                  <span>Home</span>
                  <span>Home</span>
                </SmoothScrollLink>
              </li>
              <li className="navbar_link">
                <SmoothScrollLink
                  href="#projects"
                  className="transforming-link"
                >
                  <span>Projects</span>
                  <span>Projects</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink href="#contact" className="transforming-link">
                  <span>Let's talk</span>
                  <span>Let's talk</span>
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};
