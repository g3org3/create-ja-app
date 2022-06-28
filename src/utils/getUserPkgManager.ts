import { execSync } from "child_process";
export type PackageManager = "npm" | "pnpm" | "yarn";

export const getUserPkgManager: () => PackageManager = () => {
  try {
    execSync("which yarn").toString();
    return "yarn";
  } catch {
    // ignore
  }

  try {
    execSync("which pnpm").toString();
    return "pnpm";
  } catch {
    // ignore
  }

  try {
    execSync("which npm").toString();
    return "npm";
  } catch {
    throw new Error("npm is not installed!");
  }
};
