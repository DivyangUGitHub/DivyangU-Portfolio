import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.get("/api/github", async (req, res) => {

  try {

    const username =
      process.env.GITHUB_USERNAME;

    const token =
      process.env.GITHUB_TOKEN;

    const response = await fetch(
      `https://api.github.com/users/${username}/events`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
const data =
  await response.json();

console.log(data);

const pushEvent =
  data.find(
    (event) =>
      event.type === "PushEvent" ||
      event.type === "CreateEvent"
  );

    if (!pushEvent) {

      return res.json({
        success: false,
      });

    }

    const repo =
      pushEvent.repo.name;

    const commit =
      pushEvent.payload.commits?.[0];

    res.json({

      success: true,

      repo,

      message:
        commit?.message ||

        "New Update",

      time:
        pushEvent.created_at,

      url: `https://github.com/${repo}`,
    });

  } catch (error) {

    res.json({
      success: false,
    });

  }

});

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});