import express from "express";
import dotenv from "dotenv";
import SpotifyWebApi from "spotify-web-api-node";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

const spotifyApi =
  new SpotifyWebApi({

    clientId:
      process.env.SPOTIFY_CLIENT_ID,

    clientSecret:
      process.env.SPOTIFY_CLIENT_SECRET,

    refreshToken:
      process.env.SPOTIFY_REFRESH_TOKEN,

  });

app.get(
  "/api/spotify",

  async (req, res) => {

    try {

      // REFRESH ACCESS TOKEN
      const data =
        await spotifyApi.refreshAccessToken();

      spotifyApi.setAccessToken(
        data.body.access_token
      );

      // RECENT SONG
      const current =
        await spotifyApi.getMyRecentlyPlayedTracks({

          limit: 1,

        });

      const song =
        current.body.items[0].track;

      res.json({

        isPlaying: true,

        title:
          song.name,

        artist:
          song.artists
            .map(
              (artist) =>
                artist.name
            )
            .join(", "),

        albumImageUrl:
          song.album.images[0].url,

        songUrl:
          song.external_urls.spotify,

      });

    } catch (err) {

      console.log(err);

      res.json({

        isPlaying: false,

      });

    }
  }
);

app.listen(
  5000,

  () => {

    console.log(
      "Spotify API running on 5000"
    );

  }
);