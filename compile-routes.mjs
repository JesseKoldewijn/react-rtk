import fs from "fs";
import path from "path";
import prettier from "prettier";

import prettierConfig from "./prettier.config.cjs";

const compile = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const currentDirectory = path.dirname(currentFilePath);
  const routes = fs.readdirSync(path.resolve(currentDirectory, "src/pages"));

  const routesSet = new Set();
  for (const route of routes) {
    const routeName = route.split(".")[0];

    const pathName = routeName === "index" ? "/" : `/${routeName}`;

    routesSet.add(`{
            pathname: "${pathName}" as const,
            component: lazy(() => import("../pages/${routeName}")),
        }`);
  }

  const routesArray = Array.from(routesSet);

  const routesFileContent = `
        import { lazy } from "react";

        const fileRoutes = [${routesArray.toString()}];

        export default fileRoutes;
    `;

  const outputFilePath = path.resolve(
    currentDirectory,
    "src/routers/fileRoutes.ts",
  );

  const formattedOutput = await prettier.format(routesFileContent, {
    parser: "typescript",
    ...prettierConfig,
  });

  fs.writeFileSync(outputFilePath, formattedOutput);
};

fs.watch("./src/pages", function (event, filename) {
  if (event == "change") {
    compile();
  }
});

compile();
