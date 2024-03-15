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
          <div className="navbar_links">
            <ul>
              <li className="navbar_link">
                <SmoothScrollLink href="#">Work</SmoothScrollLink>
              </li>
              <li className="navbar_link">
                <SmoothScrollLink href="#projects">Services</SmoothScrollLink>
              </li>

              <li>
                <div className="open_for_work">
                  <SmoothScrollLink href="#contact">
                    <span>Hire me</span>
                  </SmoothScrollLink>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};
