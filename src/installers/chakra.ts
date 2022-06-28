import type { Installer } from "./index.js";
import path from "path";
import fs from "fs-extra";
import { PKG_ROOT } from "../consts.js";
import { runPkgManagerInstall } from "../utils/runPkgManagerInstall.js";

export const chakraInstaller: Installer = async (
  projectDir,
  packageManager,
) => {
  await runPkgManagerInstall({
    packageManager,
    projectDir,
    packages: [
      "@chakra-ui/react",
      "@emotion/react@^11",
      "@emotion/styled@^11",
      "framer-motion@^6",
    ],
    devMode: false,
  });

  const chakraAssetDir = path.join(PKG_ROOT, "template/addons/chakra");

  const appHandlerSrc = path.join(chakraAssetDir, "_app.ts");
  const appHandlerDest = path.join(projectDir, "src/pages/_app.ts");

  const utilsSrc = path.join(chakraAssetDir, "utils.ts");
  const utilsDest = path.join(projectDir, "src/utils/theme.ts");

  const documentSrc = path.join(chakraAssetDir, "_document.ts");
  const documentDest = path.join(projectDir, "src/pages/_document.ts");

  await Promise.all([
    fs.copy(appHandlerSrc, appHandlerDest),
    fs.copy(utilsSrc, utilsDest),
    fs.copy(documentSrc, documentDest),
  ]);
};
