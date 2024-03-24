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
                <SmoothScrollLink
                  href="#projects"
                  className="transforming-link"
                  dataLink="Work"
                >
                  Work
                </SmoothScrollLink>
              </li>
              <li className="navbar_link">
                <SmoothScrollLink
                  href="#services"
                  className="transforming-link"
                  dataLink="Services"
                >
                  Services
                </SmoothScrollLink>
              </li>

              <li>
                <SmoothScrollLink href="#contact" dataLink="Let's talk">
                  Let's talk
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};
