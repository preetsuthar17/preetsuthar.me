import { SpotifyStatus } from "./SpotifyStatus";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-6  text-justify">
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
      </header>
    </>
  );
};

export default Header;
