import type { PackageManager } from "../utils/getUserPkgManager.js";
import { chakraInstaller } from "./chakra.js";
import { nextAuthInstaller } from "./next-auth.js";
import { prismaInstaller } from "./prisma.js";
import { tailwindInstaller } from "./tailwind.js";
import { trpcInstaller } from "./trpc.js";

// Turning this into a const allows the list to be iterated over for programatically creating prompt options
// Should increase extensability in the future
export const availablePackages = [
  "nextAuth",
  "prisma",
  "tailwind",
  "trpc",
  "chakra",
] as const;

export type AvailablePackages = typeof availablePackages[number];

export type Installer = (
  projectDir: string,
  packageManager: PackageManager,
  packages: PkgInstallerMap,
) => Promise<void>;

export type PkgInstallerMap = {
  [pkg in AvailablePackages]: {
    inUse: boolean;
    installer: Installer;
  };
};

export const buildPkgInstallerMap = (
  packages: AvailablePackages[],
): PkgInstallerMap => ({
  nextAuth: {
    inUse: packages.includes("nextAuth"),
    installer: nextAuthInstaller,
  },
  prisma: {
    inUse: packages.includes("prisma"),
    installer: prismaInstaller,
  },
  tailwind: {
    inUse: packages.includes("tailwind"),
    installer: tailwindInstaller,
  },
  trpc: {
    inUse: packages.includes("trpc"),
    installer: trpcInstaller,
  },
  chakra: {
    inUse: packages.includes("chakra"),
    installer: chakraInstaller,
  },
});
