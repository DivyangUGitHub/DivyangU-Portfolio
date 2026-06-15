import express from "express";
import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const spotifyApi =
  new SpotifyWebApi({

    clientId:
      process.env.SPOTIFY_CLIENT_ID,

    clientSecret:
      process.env.SPOTIFY_CLIENT_SECRET,

    redirectUri:
      "http://127.0.0.1:8888/callback",

  });

app.get("/", (req, res) => {

  res.send("Spotify Server Running");

});

app.get("/login", (req, res) => {

  const scopes = [

    "user-read-currently-playing",

    "user-read-playback-state",

    "user-read-recently-played",

  ];

  const authorizeURL =
    spotifyApi.createAuthorizeURL(
      scopes
    );

  res.redirect(authorizeURL);

});

app.get(
  "/callback",

  async (req, res) => {

    const code = req.query.code;

    try {

      const data =
        await spotifyApi.authorizationCodeGrant(
          code
        );

      console.log(
        "\nACCESS TOKEN:\n"
      );

      console.log(
        data.body.access_token
      );

      console.log(
        "\nREFRESH TOKEN:\n"
      );

      console.log(
        data.body.refresh_token
      );

      res.send(
        "SUCCESS! CHECK TERMINAL"
      );

    } catch (err) {

      console.log(err);

      res.send("ERROR");

    }
  }
);

app.listen(
  8888,
  "127.0.0.1",

  () => {

    console.log(
      "SERVER RUNNING ON 8888"
    );

  }
);