import Link from "next/link";
import Image from "next/image";
import navbarIcon from "../../public/favicon.ico";
import React, { useState, useEffect } from "react";
import CustomTooltip2 from "./CustomTooltip2";

const Sidebar = ({ isOpen, onClose, user }) => {
  return (
    <div
      className="sidebar"
      style={{
        width: isOpen ? "100vw" : "0",
      }}
    >
      <div className="sidebar_close_btn" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41l-3.618 3.615Z"
          />
        </svg>
      </div>

      <div className="sidebar_links">
        <Link className="sidebar_link" href="/">
          Home
        </Link>
        <Link className="sidebar_link" href="/projects">
          Projects
        </Link>
        <Link className="sidebar_link" href="/posts">
          Blogs
        </Link>
        <Link className="sidebar_link" href="/about">
          About
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        toggleSidebar();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleSidebar, isSidebarOpen]);

  return (
    <>
      <nav className="nav">
        <div className="nav_title">
          <Link href="/">
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                background: "#00000030",
                borderRadius: "6px",
              }}
            >
              <Image
                src={navbarIcon}
                width={40}
                alt="PreetSuthar"
                loading="lazy"
              ></Image>
            </span>
          </Link>
        </div>
        <div className="nav_links">
          <ul>
            <li>
              <CustomTooltip2 text="esc">
                <div className="navbar_sidebar_toggle" onClick={toggleSidebar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="32"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#eee"
                      d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"
                    />
                  </svg>
                </div>
              </CustomTooltip2>
            </li>
          </ul>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;
