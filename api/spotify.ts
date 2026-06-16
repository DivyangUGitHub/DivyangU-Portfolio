
import { Buffer } from "buffer";
export default async function handler(_req: any, res: any) {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(500).json({
        success: false,
        song: "Spotify Not Configured",
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
          "Content-Type":
            "application/x-www-form-urlencoded",
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

    if (
      playingResponse.status === 204 ||
      playingResponse.status === 404
    ) {
      return res.status(200).json({
        success: false,
        song: "Nothing Playing",
      });
    }

    const data = await playingResponse.json();

    return res.status(200).json({
      success: true,
      song: data.item?.name,
      artist: data.item?.artists?.[0]?.name,
      albumImage: data.item?.album?.images?.[0]?.url,
      url: data.item?.external_urls?.spotify,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      song: "Spotify Error",
    });
  }
}