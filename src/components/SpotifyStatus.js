import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsPauseFill } from 'react-icons/bs';
import { FaSpotify } from 'react-icons/fa';

export const SpotifyStatus = () => {
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        setPlaying(data.isPlaying ? data : null);
      } catch (_error) {
        setPlaying(null);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 60_000);
    return () => clearInterval(interval);
  }, []);

  return playing?.title
    ? <Link
        className="basics-prose flex items-center gap-2 font-sans text-sm transition-colors hover:underline"
        href={playing.songUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaSpotify className="text-[#24e467]" size={16} />
        {playing.isPlaying && <BsPauseFill size={16} />}
        <small className=" flex flex-wrap justify-start gap-1 leading-tight opacity-90">
          {playing.title} <span>•</span> {playing.artist}
        </small>
      </Link>
    : <div className="basics-prose flex items-center gap-2 text-left font-sans text-sm">
        <FaSpotify className="text-[#1DB954]" size={16} />
        <small className=" opacity-90">Not playing anything on Spotify</small>
      </div>;
};
