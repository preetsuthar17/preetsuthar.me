import Image from "next/image";
import website_logo from "../../public/website_logo.svg";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar_icon section-1">
          <Image src={website_logo} width={50} height={50} alt="Preet" />
        </Link>
        <section className="section-2">
          <div className="navbar_links">
            <ul>
              <li className="navbar_link">
                <Link
                  style={{
                    cursor: "pointer",
                  }}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="navbar_link">
                <ScrollLink
                  style={{
                    cursor: "pointer",
                  }}
                  to="projects"
                  smooth={true}
                  offset={70}
                  duration={600}
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  duration={600}
                  offset={0}
                  smooth={true}
                  className="navbar_contact_button"
                >
                  Let's talk
                </ScrollLink>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};
