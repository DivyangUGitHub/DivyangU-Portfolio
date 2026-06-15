import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI || "http://127.0.0.1:8888/callback",
});

export async function getSpotifyAccessToken() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  
  if (!refreshToken) {
    throw new Error("SPOTIFY_REFRESH_TOKEN not configured");
  }
  
  spotifyApi.setRefreshToken(refreshToken);
  
  try {
    const data = await spotifyApi.refreshAccessToken();
    return data.body.access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}