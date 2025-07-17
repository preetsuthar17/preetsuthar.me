export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const GITHUB_AUTH = process.env.GITHUB_AUTH;
  if (!GITHUB_AUTH) {
    return res.status(500).json({ error: "Missing GitHub token" });
  }

  const query = `
    query SponsorQuery {
      user(login: "preetsuthar17") {
        sponsors(first: 100) {
          edges {
            node {
              ... on User {
                id
                name
                url
                avatarUrl
              }
              ... on Organization {
                id
                name
                url
                avatarUrl
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_AUTH}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch sponsors" });
    }

    const data = await response.json();
    const sponsors =
      data?.data?.user?.sponsors?.edges?.map((edge) => ({
        name: edge.node.name ?? "",
        url: edge.node.url ?? "",
        logo: edge.node.avatarUrl ?? "",
        alt: edge.node.name ?? "Sponsor",
      })) ?? [];

    return res.status(200).json({ sponsors });
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
