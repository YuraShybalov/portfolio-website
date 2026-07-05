import { useState, useEffect, useMemo } from "react";
import { Code2, Star, GitFork } from "lucide-react";
import { githubService } from "../services/github.service";
import type { GitHubDataTransformed, GitHubStats } from "../types/github.types";
import { formatNumber } from "../utils/github.utils";

/**
 * Custom hook to fetch GitHub user data and transform it for display
 * @param username - GitHub username
 * @returns Object with stats, loading, and error states
 */
export const useGitHub = (username: string) => {
  const [data, setData] = useState<GitHubDataTransformed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const user = await githubService.getUser(username);

        setData({
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        console.error("GitHub API Error:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  /**
   * Transform raw data into display-ready stats
   */
  const stats: GitHubStats[] = useMemo(() => {
    if (!data) return [];

    return [
      {
        label: "Public Repos",
        value: formatNumber(data.publicRepos),
        icon: Code2,
      },
      { label: "Followers", value: formatNumber(data.followers), icon: Star },
      {
        label: "Following",
        value: formatNumber(data.following),
        icon: GitFork,
      },
    ];
  }, [data]);

  return { stats, loading, error };
};
