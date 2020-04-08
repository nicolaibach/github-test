#!/usr/bin/env node

// "use strict";

import pkg from "../package.json";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __packagePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../"
);
const resolvePackagePath = (filename) => path.resolve(__packagePath, filename);

const main = async () => {
  const filename = resolvePackagePath("RELEASENOTES.md");
  // console.log(filename);
  const content = `${pkg.version}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  await fs.writeFile(filename, content);
  console.log(`
––––––––––––––––––––––––––––––––––––––––
Releasenotes created
––––––––––––––––––––
> ${filename}
––––––––––––––––––––––––––––––––––––––––
`);
};

(async () => {
  try {
    await main();
  } catch (error) {
    console.log(error.message);
  }
})();
