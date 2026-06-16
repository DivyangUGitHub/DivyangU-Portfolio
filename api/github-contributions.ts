export default async function handler(_req: any, res: any) {
  try {
    const query = `
      query {
        viewer {
          contributionsCollection {
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

    console.log(
      "GitHub GraphQL Response:",
      JSON.stringify(data, null, 2)
    );

    if (data.errors) {
      return res.status(500).json({
        success: false,
        errors: data.errors,
      });
    }

    return res.status(200).json(
      data.data.viewer.contributionsCollection.contributionCalendar
    );
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contributions",
    });
  }
}