import { Buffer } from "buffer";

// Cache last played song
let lastPlayedSong: {
  song: string;
  artist: string;
  albumImage: string;
  url: string;
} | null = null;

export default async function handler(_req: any, res: any) {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(500).json({
        success: false,
        song: "Spotify Not Configured",
        artist: "Spotify",
        albumImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
        url: "https://spotify.com",
      });
    }

    const authString = Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString("base64");

    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    const playingResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    // Agar kuch nahi chal raha (offline / paused)
    if (playingResponse.status === 204 || playingResponse.status === 404) {
      // Agar cached song hai toh woh return karo
      if (lastPlayedSong) {
        return res.status(200).json({
          success: false,
          song: lastPlayedSong.song,
          artist: lastPlayedSong.artist,
          albumImage: lastPlayedSong.albumImage,
          url: lastPlayedSong.url,
          isCached: true, // Flag to indicate it's cached
        });
      }

      // Agar koi cached song nahi hai
      return res.status(200).json({
        success: false,
        song: "Nothing Playing",
        artist: "Spotify",
        albumImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
        url: "https://spotify.com",
      });
    }

    const data = await playingResponse.json();

    // Naya song play ho raha hai - update cache
    if (data.item) {
      lastPlayedSong = {
        song: data.item.name,
        artist: data.item.artists?.[0]?.name || "Unknown Artist",
        albumImage: data.item.album?.images?.[0]?.url || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
        url: data.item.external_urls?.spotify || "https://spotify.com",
      };
    }

    return res.status(200).json({
      success: true,
      song: data.item?.name,
      artist: data.item?.artists?.[0]?.name,
      albumImage: data.item?.album?.images?.[0]?.url,
      url: data.item?.external_urls?.spotify,
      isCached: false,
    });
  } catch (error) {
    // Error case mein bhi cached song return karo agar available hai
    if (lastPlayedSong) {
      return res.status(200).json({
        success: false,
        song: lastPlayedSong.song,
        artist: lastPlayedSong.artist,
        albumImage: lastPlayedSong.albumImage,
        url: lastPlayedSong.url,
        isCached: true,
      });
    }

    return res.status(500).json({
      success: false,
      song: "Spotify Error",
      artist: "Spotify",
      albumImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      url: "https://spotify.com",
    });
  }
}