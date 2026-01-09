import fs from "fs";
import path from "path";
import { parse, modify, applyEdits } from "jsonc-parser";

export const updatePackageFile = (projectPath) => {
  const filePath = path.join(projectPath, "package.json");

  if (!fs.existsSync(filePath)) {
    console.error(`❌ JSON file not found: ${filePath}`);
    return;
  }

  const file = fs.readFileSync(filePath, "utf-8");

  const testScript = modify(file, ["scripts", "test"], "vitest", {
    formattingOptions: {
      insertSpaces: true,
      tabSize: 2,
    },
  });

  const updatedFile = applyEdits(file, testScript);

  fs.writeFileSync(filePath, updatedFile, "utf-8");
  console.log(`✅ Updated package.json successfully!`);
};
