// src/pages/api/spotify.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(200).json({
        success: false,
        song: "Not configured",
        artist: "Spotify"
      });
    }

    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      return res.status(200).json({
        success: false,
        song: "No song playing",
        artist: "Spotify"
      });
    }

    const playingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    if (playingResponse.status === 204 || playingResponse.status === 404) {
      return res.status(200).json({
        success: false,
        song: "Nothing Playing",
        artist: "Spotify"
      });
    }

    const data = await playingResponse.json();
    
    return res.status(200).json({
      success: true,
      song: data.item?.name || "Unknown",
      artist: data.item?.artists[0]?.name || "Unknown",
      albumImage: data.item?.album?.images[0]?.url || null,
      url: data.item?.external_urls?.spotify || null,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      song: "Error loading",
      artist: "Spotify"
    });
  }
}