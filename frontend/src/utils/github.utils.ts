/**
 * GitHub utility functions
 */

/**
 * Format large numbers to readable format (e.g., 1200 -> "1.2K")
 * @param num - Number to format
 * @returns Formatted string
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};
