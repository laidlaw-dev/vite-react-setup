import fs from "fs";
import path from "path";

export function cleanupProject(projectPath) {
  console.log("\n🗑️ Removing unwanted files...");

  deleteFolder(path.join(projectPath, "src/assets"));
  deleteFile(path.join(projectPath, "src/App.css"));
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗎 Deleted file: ${filePath}`);
  } else {
    console.log(`⚠️ File not found: ${filePath}`);
  }
}

function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`📂 Deleted folder: ${folderPath}`);
  } else {
    console.log(`⚠️ Folder not found: ${folderPath}`);
  }
}
