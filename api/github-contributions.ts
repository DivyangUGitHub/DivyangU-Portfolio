export default async function handler(_req: any, res: any) {
  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "GITHUB_TOKEN is missing",
      });
    }

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
          Authorization: `Bearer ${token}`,
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

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "GitHub API request failed",
        githubResponse: data,
      });
    }

    if (data.errors) {
      return res.status(500).json({
        success: false,
        message: "GitHub GraphQL Error",
        errors: data.errors,
      });
    }

    return res.status(200).json(
      data?.data?.viewer?.contributionsCollection?.contributionCalendar
    );
  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error?.message || "Failed to fetch contributions",
      stack:
        process.env.NODE_ENV === "development"
          ? error?.stack
          : undefined,
    });
  }
}