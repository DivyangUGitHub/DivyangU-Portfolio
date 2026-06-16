"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiSpotify } from "react-icons/si";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function SpotifyCard() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  // ✅ Updated useEffect with API route
  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();

        if (json.success) {
          setData({
            isPlaying: true,
            title: json.song || "Nothing Playing",
            artist: json.artist || "Spotify",
            albumImageUrl: json.albumImage || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
            songUrl: json.url || "https://spotify.com"
          });
        } else {
          setData({
            isPlaying: false,
            title: json.song || "Nothing Playing",
            artist: json.artist || "Spotify",
            albumImageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
            songUrl: "https://spotify.com"
          });
        }
      } catch (err) {
        console.log(err);
        // Fallback demo data
        setData({
          isPlaying: false,
          title: "Nothing Playing",
          artist: "Spotify",
          albumImageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
          songUrl: "https://spotify.com"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href={data?.songUrl || "https://spotify.com"}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        boxShadow: "0 0 0 0.5px rgba(255,255,255,0.7)",
      }}
      transition={{ duration: 0.1 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/[0.06]
        hover:border-white/50
        bg-black
        min-h-[460px]
        max-h-[460px]
        p-6
        sm:p-8
        flex
        flex-col
        justify-between
        transition-all
        duration-300
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        animate={{
          scale: hovered ? 1.08 : 1,
          opacity: hovered ? 0.90 : 0.55,
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <img
          src={data?.albumImageUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"}
          alt="album"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </motion.div>

      {/* TOP CONTENT */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1ED760]/10 border border-[#1ED760]/20 flex items-center justify-center">
              <SiSpotify className="text-[#1ED760] text-3xl" />
            </div>
            <div>
              <h2 className="text-white font-black text-3xl" style={{ fontFamily: "'Quintessential', serif" }}>
                Last Played
              </h2>
              <p className="text-zinc-400 text-sm mt-1">LIVE SPOTIFY STATUS</p>
            </div>
          </div>
          <ExternalLink className="text-zinc-500 w-5 h-5" />
        </div>

        {/* SONG INFO */}
        <div className="mt-8">
          <p className="text-zinc-300 text-lg leading-relaxed max-w-[650px]">
            {loading ? "Loading..." : "I recently listened to "}
            <span className="text-white font-bold">
              {data?.title || "Nothing Playing"}
            </span>
            {" by "}
            <span className="text-white font-bold">
              {data?.artist || "Spotify"}
            </span>
          </p>
        </div>
      </div>

      {/* CENTER ALBUM POSTER */}
      <div className="relative z-10 flex justify-center mt-10 mb-8">
        <motion.div
          animate={{
            y: hovered ? -8 : 0,
            scale: hovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="relative w-[160px] sm:w-[180px] overflow-hidden rounded-[26px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
        >
          <img
            src={data?.albumImageUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"}
            alt="album"
            className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-white/10 pt-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${data?.isPlaying ? "bg-green-400 animate-pulse" : "bg-zinc-500"}`} />
          <p className="text-zinc-300 text-sm">
            {data?.isPlaying ? "Currently Playing" : "Offline"}
          </p>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-[#1ED760]/10 border border-[#1ED760]/20 text-[#1ED760] text-xs tracking-[2px]">
          LIVE
        </div>
      </div>
    </motion.a>
  );
}