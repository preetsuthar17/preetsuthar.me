import fs from "fs";
import path from "path";

export function getAllSlugs() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const postFileNames = fs.readdirSync(postsDirectory);

  const postSlugs = postFileNames.map((fileName) =>
    fileName.replace(/\.js$/, "")
  );

  return postSlugs;
}
