import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi =
  new SpotifyWebApi({

    clientId:
      "8252bc633df345b4a0842c3c153d25a1",

    clientSecret:
      "472f2b5af01440ae8bbce9a135e5e103",

    redirectUri:
      "http://127.0.0.1:8888/callback",
  });

spotifyApi.authorizationCodeGrant(
  "AQA_1_xmKNNq9HqOsDQY7AR9S-m8e1jiE_lm0Svl-hjjoZ8Br_D-64oYTfTVOSU6ZsK33Lp7q2JETgJhPoA_0rm2zaaCq2AJrnoT8ZA1LYNjV2q_ksBmKgnmZzPp2lWAQqc"
).then((data) => {

  console.log(
    data.body.access_token
  );

  console.log(
    data.body.refresh_token
  );

});