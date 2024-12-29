import Link from "next/link";
import { SpotifyStatus } from "./SpotifyStatus";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-6 text-justify text-pretty">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Preet Suthar</h1>
          <SpotifyStatus />
        </div>
        <p>
          <em className="[font:var(--type-italic)]">
            I build & ship SaaS products.
          </em>
        </p>
        <p>
          I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups{" "}
          <em className="[font:var(--type-italic)]">(SaaS)</em>  in the last 5
          years, each focusing on easy-to-use and secure tech solutions.
        </p>
        <div>
          <Link
            href="https://twitter.com/preetsuthar"
            className="opacity-80 hover:opacity-100 transition-all underline"
          >
            Twitter
          </Link>
          <span className="mx-2">•</span>
          <Link
            href="https://www.linkedin.com/in/preetsuthar/"
            className="opacity-80 hover:opacity-100 transition-all underline"
          >
            YouTube
          </Link>
          <span className="mx-2">•</span>
          <Link
            href="https://hextastudio.in"
            className="opacity-80 hover:opacity-100 transition-all underline"
          >
            HextaStudio
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
