import fs from "fs/promises"; // ✅ 改用非同步 fs
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

// 取得所有文章
export async function getAllPosts() {
  const files = await fs.readdir(contentDirectory);

  return await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(contentDirectory, filename);
      const markdownWithMeta = await fs.readFile(filePath, "utf-8");
      const { data } = matter(markdownWithMeta);

      return {
        title: data.title,
        date: data.date,
        slug: filename.replace(".md", ""),
      };
    })
  );
}

// 根據 slug 取得文章內容
export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);

  try {
    const markdownWithMeta = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(markdownWithMeta);

    return {
      title: data.title,
      date: data.date,
      content,
    };
  } catch (error) {
    console.error("找不到文章:", filePath);
    return null;
  }
}