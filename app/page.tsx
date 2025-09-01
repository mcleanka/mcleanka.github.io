"use client"

import { sanitizeProfile } from "@/lib/utils";
import HomeClient from "@/components/pages/HomeClient";
import { useEffect, useState } from "react";

interface GitHubProfileFetcherProps {
  username?: string;
}

export default function Page({ username }: GitHubProfileFetcherProps = {}) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const DEFAULT_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "octocat";
  const targetUsername = username || DEFAULT_USERNAME;

  async function fetchGitHubProfile(githubUsername: string): Promise<Profile> {
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
        headers: {
          'Accept': 'application/vnd.github+json',
        },
        cache: "no-store",
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`GitHub user "${githubUsername}" not found`);
        }
        if (response.status === 403) {
          throw new Error("API rate limit exceeded. Please try again later.");
        }
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const userData = await response.json();
      return sanitizeProfile(userData);
    } catch (error) {
      console.error("Error fetching GitHub profile:", error);
      throw error;
    }
  }

  useEffect(() => {
    const loadProfile = async () => {
      if (!targetUsername) {
        setError("No GitHub username provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await fetchGitHubProfile(targetUsername);
        setProfile(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to load profile";
        setError(errorMessage);
        setProfile(sanitizeProfile({} as Profile));
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [targetUsername]);

  const handleRetry = () => {
    setProfile(null);
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const loadProfile = async () => {
        try {
          const data = await fetchGitHubProfile(targetUsername);
          setProfile(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load profile");
          setProfile(sanitizeProfile({} as Profile));
        } finally {
          setLoading(false);
        }
      };
      loadProfile();
    }, 100);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-gray-600 mx-auto"></div>
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
              style={{ animationDelay: '0.15s' }}
            />
          </div>
          <div className="mt-6 space-y-2">
            <div className="text-xl font-semibold text-gray-400">Loading GitHub Profile</div>
            <div className="text-sm text-gray-300">Fetching data for @{targetUsername}</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-lg p-8">
          <div className="text-8xl mb-6">🚫</div>
          <h2 className="text-3xl font-bold text-gray-300 mb-4">Profile Not Found</h2>
          <p className="text-gray-500 mb-2 text-lg">{error}</p>
          <p className="text-sm text-gray-400 mb-8">
            Make sure the username &quot;@{targetUsername}&quot; is correct and the profile is public.
          </p>
          <div className="space-x-4">
            <button
              onClick={handleRetry}
              className="px-8 py-3 bg-[#233554] text-white rounded hover:bg-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Try Again
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-[#112240] text-white rounded hover:bg-gray-600 transition-all duration-200 font-medium"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <HomeClient profile={profile!} />;
}