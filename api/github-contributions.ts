export default async function handler(_req: any, res: any) {
  try {
    const query = `
      query {
        user(login: "DivyangUGitHub") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
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
      data.data.user.contributionsCollection.contributionCalendar
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch contributions",
    });
  }
}