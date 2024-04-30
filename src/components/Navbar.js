import Image from "next/image";
import Link from "next/link";

import logo from "../../public/portfolio-logo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-7 border border-b-zinc-200">
        <div>
          <Image
            src={logo}
            width={40}
            height={40}
            alt="Preet Suthar"
            className="rounded object-fit"
          />
        </div>
        <div className="flex items-center gap-[3rem]">
          <ul className="flex gap-[3rem]">
            <li className="max-[550px]:hidden">
              <Link
                href="#projects"
                className="text-sm opacity-80 hover:opacity-100 tracking-tight"
              >
                Projects
              </Link>
            </li>
            <li className="max-[450px]:hidden">
              <Link
                href="#services"
                className="text-sm opacity-80 hover:opacity-100 tracking-tight"
              >
                Services
              </Link>
            </li>
            <li className="max-[350px]:hidden">
              <Link
                href="#about"
                className="text-sm opacity-80 hover:opacity-100 tracking-tight"
              >
                About
              </Link>
            </li>
          </ul>
          <div>
            <Link href="#contact" className="primary-button">
              Let's talk{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
