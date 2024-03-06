import Link from "next/link";

const notFound = () => {
  return (
    <div className="notFoundPage">
      <h1 className="noisy">404</h1>
      <Link href="/" className="secondary-button">
        Let's go back home
      </Link>
    </div>
  );
};

export default notFound;
