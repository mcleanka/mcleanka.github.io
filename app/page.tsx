import { sanitizeProfile } from "@/lib/utils";
import HomeClient from "@/components/pages/HomeClient";

async function fetchGitHubProfile(): Promise<Profile> {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) throw new Error("GitHub Personal Access Token is not defined.");

    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });

    if (!response.ok) throw new Error(`GitHub API responded with status: ${response.status}`);

    const userData = await response.json();
    return sanitizeProfile(userData);
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return sanitizeProfile({} as Profile);
  }
}

export default async function Page() {
  const profile = await fetchGitHubProfile();
  return <HomeClient profile={profile} />;
}