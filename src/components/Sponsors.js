import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';

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
        const res = await fetch('/api/sponsors');
        if (!res.ok) {
          throw new Error('Failed to fetch sponsors');
        }
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
    <section className="flex w-full flex-col items-center gap-12 text-left">
      <div className="flex w-full flex-col gap-8">
        <h2 className="px-10 text-lg tracking-tight">Sponsors</h2>

        <div className="px-10">
          {hasError
            ? <div className="flex items-center gap-2 py-8 text-gray-500">
                <FaUsers className="h-5 w-5" /> Unable to load sponsors. Please
                try again later.
              </div>
            : isLoading
              ? <div className="flex w-full flex-wrap justify-items-start gap-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      className="flex animate-pulse items-center gap-3 p-2"
                      key={index}
                    >
                      <div className="h-8 w-8 bg-gray-200" />
                      <div className="h-4 w-24 bg-gray-100" />
                    </div>
                  ))}
                </div>
              : sponsors.length === 0
                ? <a
                    className="bg-gray-100 px-8 py-4 font-medium text-gray-700 transition hover:bg-gray-200"
                    href="/sponsor"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Be the first one to sponsor! 🥳
                  </a>
                : <div className="justify-left flex w-full flex-wrap gap-4">
                    {sponsors.map((sponsor, idx) => (
                      <a
                        className={`flex items-center justify-start gap-3 p-2 text-left transition-opacity duration-300 ${
                          hovered !== null && hovered !== idx
                            ? 'opacity-40'
                            : 'opacity-100'
                        }`}
                        href={sponsor.url}
                        key={sponsor.url}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          alt={sponsor.alt || sponsor.name || 'Sponsor'}
                          className="h-8 w-8 bg-gray-200 object-cover"
                          src={sponsor.logo}
                        />
                        <span className="text-[1rem] text-blue underline-offset-2">
                          {sponsor.url.replace('https://github.com/', '')}
                        </span>
                      </a>
                    ))}
                  </div>}
        </div>
        <div className="flex flex-wrap gap-2 px-10">
          <Link
            className="w-fit border border-blue bg-transparent px-4 py-2 text-blue hover:bg-blue hover:text-white"
            href="/sponsor"
            target="_blank"
          >
            Sponsor My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
