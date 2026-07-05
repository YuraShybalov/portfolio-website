/**
 * GitHub API User Response
 * @see https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
 */
export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

/**
 * GitHub Stats for display
 */
export interface GitHubStats {
  label: string;
  value: string;
  icon: React.ElementType;
}

/**
 * GitHub data from API transformation
 */
export interface GitHubDataTransformed {
  publicRepos: number;
  followers: number;
  following: number;
}

/**
 * Error response from GitHub API
 */
export interface GitHubError {
  message: string;
  documentation_url?: string;
}
