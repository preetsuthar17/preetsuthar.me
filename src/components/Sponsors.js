import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    async function fetchSponsors() {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch("/api/sponsors");
        if (!res.ok) throw new Error("Failed to fetch sponsors");
        const data = await res.json();
        setSponsors(data.sponsors || []);
      } catch {
        setHasError(true);
        setSponsors([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSponsors();
  }, []);

  return (
    <section className="flex flex-col gap-24 text-left items-center w-full">
      <div className="flex flex-col gap-8 w-full">
        <h2 className="tracking-tight text-lg px-10">Sponsors</h2>

        <div className="px-10">
          {hasError ? (
            <div className="flex items-center gap-2 text-gray-500 py-8">
              <FaUsers className="w-5 h-5" /> Unable to load sponsors. Please
              try again later.
            </div>
          ) : isLoading ? (
            <div className="flex flex-wrap gap-4 w-full justify-items-start">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse flex items-center gap-3 p-2"
                >
                  <div className="h-8 w-8 bg-gray-200 rounded" />
                  <div className="h-4 w-24 bg-gray-100 rounded" />
                </div>
              ))}
            </div>
          ) : sponsors.length === 0 ? (
            <a
              href="https://github.com/sponsors/preetsuthar17"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition"
            >
              Be the first one to sponsor! 🥳
            </a>
          ) : (
            <div className="flex flex-wrap gap-4 w-full justify-left">
              {sponsors.map((sponsor, idx) => (
                <a
                  key={sponsor.url}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded justify-start text-left transition-opacity duration-300 ${
                    hovered !== null && hovered !== idx
                      ? "opacity-40"
                      : "opacity-100"
                  }`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.alt || sponsor.name || "Sponsor"}
                    className="h-8 w-8 rounded bg-gray-200 object-cover"
                  />
                  <span className="font-mono text-[1rem] text-[var(--blue-color)]  underline-offset-2">
                    {sponsor.url.replace("https://github.com/", "")}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 flex-wrap px-10">
          <Link
            href="https://github.com/sponsors/preetsuthar17"
            target="_blank"
            className="px-4 py-2 bg-[var(--blue-color)] text-white w-fit border border-[var(--blue-color)] hover:brightness-90"
          >
            Sponsor My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
