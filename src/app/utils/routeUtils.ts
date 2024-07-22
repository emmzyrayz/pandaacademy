// utils/routeUtils.ts
export function isMatchingPath(pathname: string, patterns: string[]): boolean {
  return patterns.some((pattern) => {
    // Handle wildcard matching for dynamic segments
    if (pattern.endsWith("/")) {
      return pathname.startsWith(pattern);
    }
    return pathname === pattern;
  });
}
