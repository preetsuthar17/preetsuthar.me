import Link from "next/link";
import Image from "next/image";
import navbarIcon from "../../public/favicon.ico";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { playClickSound } from "../utils/functions/ClickAudioPlayer";
import { toggleMuteAll } from "../utils/functions/ClickAudioPlayer";

const Sidebar = ({ isOpen, onClose, user }) => {
  return (
    <div
      className="sidebar"
      style={{
        width: isOpen ? "100vw" : "0",
      }}
    >
      <div
        className="sidebar_close_btn"
        onClick={() => {
          onClose();
          playClickSound();
        }}
        style={{
          cursor: "pointer",
        }}
      >
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
        <Link
          className="sidebar_link"
          onClick={() => {
            playClickSound();
            onClose();
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          className="sidebar_link"
          onClick={() => {
            playClickSound();
            onClose();
          }}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="sidebar_link"
          onClick={() => {
            playClickSound();
            onClose();
          }}
          href="/posts"
        >
          Blogs
        </Link>
        <Link
          className="sidebar_link"
          onClick={() => {
            playClickSound();
            onClose();
          }}
          href="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({ goback }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMuted, setMuted] = useState(false);

  const router = useRouter();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSoundMute = () => {
    setMuted(!isMuted);
    toggleMuteAll();
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
                <button
                  className="go-back-btn"
                  onClick={() => {
                    router.back();
                    playClickSound();
                  }}
                >
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
              <div
                className="navbar_mute_btn"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleSoundMute();
                  playClickSound();
                }}
              >
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M5 13h2.83L10 15.17V8.83L7.83 11H5z"
                      opacity=".3"
                    />
                    <path
                      fill="#fff"
                      d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zm4-.86v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 14 7.97zm0-4.74v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77c0-4.28-2.99-7.86-7-8.77z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M7.83 11H5v2h2.83L10 15.17v-3.76l-1.29-1.29z"
                      opacity=".3"
                    />
                    <path
                      fill="#fff"
                      d="M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05l1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"
                    />
                  </svg>
                )}
              </div>
            </li>
            <li>
              <div
                className="navbar_sidebar_toggle"
                onClick={() => {
                  toggleSidebar();
                  playClickSound();
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
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
