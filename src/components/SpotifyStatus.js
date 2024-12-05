import { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
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
      className="flex items-center gap-2 text-sm hover:text-zinc-800 text-zinc-600 transition-colors"
    >
      <FaSpotify className="text-[#1DB954]" size={15} />
      {playing.isPlaying && <BsPauseFill size={15} />}
      <small className="leading-tight">
        {playing.title} • {playing.artist}
      </small>
    </Link>
  ) : (
    <div className="flex items-center gap-2 text-sm text-zinc-600">
      <FaSpotify className="text-[#1DB954]" size={15} />
      <small>Not playing anything on Spotify</small>
    </div>
  );
};
