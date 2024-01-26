import Link from "next/link";
import Image from "next/image";
import navbarIcon from "../../public/favicon.ico";
import React, { useState, useEffect } from "react";
import CustomTooltip2 from "./CustomTooltip2";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen, onClose, user }) => {
  return (
    <div
      className="sidebar"
      style={{
        width: isOpen ? "100vw" : "-10px,
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

const Navbar = ({ goback }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
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
                width={37}
                alt="PreetSuthar"
                loading="lazy"
              ></Image>
            </span>
          </Link>
        </div>
        <div className="nav_links">
          <ul>
            {goback && (
              <li>
                <button className="go-back-btn" onClick={() => router.back()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="go-back-btn-icon"
                  >
                    <path
                      fill="currentColor"
                      d="m2.82 12l7.715 7.715q.22.222.218.53q-.003.307-.224.528t-.529.221q-.308 0-.529-.22L1.83 13.136q-.242-.243-.354-.54q-.112-.299-.112-.597t.112-.596q.112-.298.354-.54L9.47 3.22q.221-.221.532-.218q.31.003.532.224t.22.529q0 .307-.22.529z"
                    />
                  </svg>
                  <span>back</span>
                </button>
              </li>
            )}
            <li>
              <div className="navbar_sidebar_toggle" onClick={toggleSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;
