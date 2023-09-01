import Link from "next/link";
import Image from "next/image";

import navbarIcon from "../../public/favicon.ico";

const Navbar = () => {
  return (
    <header className="navbar-div">
      <nav className="navbar">
        <div className="nav-header">
          <Link href="/">
            <Image
              src={navbarIcon}
              width={40}
              height={40}
              loading="lazy"
              alt="PreetSuthar"
              placeholder="blur"
              blurDataURL="../../public/favicon.ico"
            />
          </Link>
        </div>
        <nav className="nav-items">
          <ul>
            <Link href="/">
              <ul>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1.28em"
                    width="1.28em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                </li>
              </ul>
              <span className="hidden">Home</span>
            </Link>
            <Link href="/projects">
              <ul>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1.28em"
                    width="1.28em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                  </svg>
                </li>
              </ul>
              <span className="hidden">Projects</span>
            </Link>
            <Link href="/posts">
              <ul>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1.28em"
                    width="1.28em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"></path>
                  </svg>
                </li>
              </ul>
              <span className="hidden">posts</span>
            </Link>
            <Link href="/about">
              <ul>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1.28em"
                    width="1.28em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                </li>
              </ul>
              <span className="hidden">About</span>
            </Link>
          </ul>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
