import Link from "next/link";

import { motion } from "framer-motion";
import { useState } from "react";

const CourseSnackBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  setTimeout(() => {
    setIsOpen(false);
  }, 10000);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 5 }}
        >
          <div className="course-snackbar">
            <div>
              <button onClick={handleClose} className="course-snackbarClose">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p>
                Check out latest CSS series.{" "}
                <Link
                  onClick={handleClose}
                  className="p-color"
                  href="https://preetsuthar.me/tags/CSS%20Course"
                >
                  Here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CourseSnackBar;
