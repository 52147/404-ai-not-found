import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "../components/BlogList"; // 用 Client Component 處理搜尋 & 標籤

export default function Blog() {
  // 讀取 Markdown 文章
  const files = fs.readdirSync(path.join("content"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );
    const { data, content } = matter(markdownWithMeta);
    return {
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      slug: filename.replace(".md", ""),
      content,
    };
  });

  return <BlogList posts={posts} />; // 把資料傳給 Client Component
}