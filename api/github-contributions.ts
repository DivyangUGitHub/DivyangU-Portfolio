export default async function handler(_req: any, res: any) {
  try {
const query = `
query {
  viewer {
    contributionsCollection(
      from: "2026-01-01T00:00:00Z"
      to: "2026-12-31T23:59:59Z"
    ) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
}
`;

    const response = await fetch(
      "https://api.github.com/graphql",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );

    const data = await response.json();

return res.status(200).json(
  data.data.viewer.contributionsCollection.contributionCalendar
);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch contributions",
    });
  }
}