import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CourseSnackBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
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
              <p>
                Check out our latest DSA series.{" "}
                <Link
                  onClick={handleClose}
                  className="p-color"
                  href="/tags/DSA"
                >
                  Here
                </Link>
              </p>
            </div>
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
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CourseSnackBar;
