import Link from "next/link";

const Dialog = ({ onClose }) => {
  return (
    <div className="dialog-backdrop-review">
      <div className="dialog-box-review">
        <div className="dialog-box-cross-review">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="#fff"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className="dialog-box-review-p">
          <p>Mind leaving a review?</p>
        </div>
        <Link href="/reviews">
          <button
            onClick={onClose}
            className="primary-btn-green dialog-review-button-review"
          >
            Review!
          </button>
        </Link>
        {"   "}
      </div>
    </div>
  );
};

export default Dialog;
