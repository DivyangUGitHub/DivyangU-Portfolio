// src/app/api/spotify/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return NextResponse.json({ 
        success: false, 
        message: "Spotify credentials not configured" 
      });
    }

    // Get new access token using refresh token
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
    const accessToken = tokenData.access_token;

    // Get currently playing track
    const playingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (playingResponse.status === 204) {
      return NextResponse.json({
        success: false,
        message: "Nothing playing",
      });
    }

    const data = await playingResponse.json();
    
    return NextResponse.json({
      success: true,
      song: data.item.name,
      artist: data.item.artists[0].name,
      album: data.item.album.name,
      albumImage: data.item.album.images[0]?.url,
      url: data.item.external_urls.spotify,
    });

  } catch (error) {
    console.error('Spotify API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: "Error fetching Spotify" 
    });
  }
}