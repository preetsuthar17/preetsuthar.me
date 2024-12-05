import { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";
import Link from "next/link";

export const SpotifyStatus = () => {
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        setPlaying(data.isPlaying ? data : null);
      } catch (error) {
        console.error("Error fetching Spotify status:", error);
        setPlaying(null);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 60000);
    return () => clearInterval(interval);
  }, []);

  return playing && playing.title ? (
    <Link
      href={playing.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm justify-center hover:underline transition-colors"
    >
      <FaSpotify className="text-[#24e467]" size={16} />
      {playing.isPlaying && <BsPauseFill size={16} />}
      <small className=" opacity-90 leading-tight flex gap-1">
        {playing.title} <span>•</span> {playing.artist}
      </small>
    </Link>
  ) : (
    <div className="flex items-center gap-2 text-sm">
      <FaSpotify className="text-[#1DB954]" size={16} />
      <small className=" opacity-90">Not playing anything on Spotify</small>
    </div>
  );
};
