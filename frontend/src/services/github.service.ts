import axios from "axios";
import type { AxiosInstance } from "axios";
import type { GitHubUser, GitHubError } from "../types/github.types";

/**
 * GitHub API Service
 * Handles all GitHub-related API requests
 */
class GitHubService {
  private api: AxiosInstance;
  private readonly BASE_URL = "https://api.github.com";

  constructor() {
    this.api = axios.create({
      baseURL: this.BASE_URL,
      timeout: 10000,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
  }

  /**
   * Fetch user data from GitHub API
   * @param username - GitHub username
   * @returns GitHub user data
   */
  async getUser(username: string): Promise<GitHubUser> {
    try {
      const response = await this.api.get<GitHubUser>(`/users/${username}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data as GitHubError;
        throw new Error(
          errorData?.message || `Failed to fetch GitHub user: ${username}`,
        );
      }
      throw error;
    }
  }

  /**
   * Fetch user's public repositories
   * @param username - GitHub username
   * @param perPage - Number of repos per page
   * @returns Array of repositories
   */
  async getUserRepos(username: string, perPage: number = 100) {
    try {
      const response = await this.api.get(`/users/${username}/repos`, {
        params: {
          per_page: perPage,
          sort: "stars",
          direction: "desc",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data as GitHubError;
        throw new Error(
          errorData?.message || `Failed to fetch repositories for: ${username}`,
        );
      }
      throw error;
    }
  }
}

// Export singleton instance
export const githubService = new GitHubService();
