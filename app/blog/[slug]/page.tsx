import { getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // ✅ 支援 Markdown 表格
import rehypeRaw from "rehype-raw"; // ✅ 支援 HTML 標籤
import rehypeHighlight from "rehype-highlight"; // ✅ 語法高亮
import "highlight.js/styles/github.css"; // 你可以換成別的樣式
import CommentSection from "../../components/CommentSection";
import Link from "next/link";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    return notFound();
  }

  const post = await getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
      {/* 🔹 返回文章列表 */}
      <Link
        href="/blog"
        className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        ← 回到文章列表
      </Link>

      {/* 🔹 文章標題 */}
      <h1 className="text-4xl font-extrabold mb-4 leading-snug text-gray-900 dark:text-white">
        📖 {post.title}
      </h1>

      {/* 🔹 文章日期 & 標籤 */}
      <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg dark:bg-gray-700 dark:text-white">
          📅 {post.date}
        </span>
        {post.tags &&
          post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs dark:bg-blue-900 dark:text-blue-300"
            >
              #{tag}
            </span>
          ))}
      </div>

      {/* 🔹 文章內容 (支援 Markdown 表格 & 高亮) */}
      <div className="prose prose-lg dark:prose-invert leading-relaxed max-w-full">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // ✅ 支援 Markdown 表格
          rehypePlugins={[rehypeRaw, rehypeHighlight]} // ✅ 支援 HTML & 高亮
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* 🔹 相關文章 */}
      {post.relatedPosts?.length > 0 && (
        <div className="mt-8 p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-3">🔗 相關文章</h2>
          <ul className="list-none space-y-2">
            {post.relatedPosts.map((relatedPost) => (
              <li key={relatedPost.slug}>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="text-blue-500 hover:underline text-lg dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {relatedPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔹 留言區 */}
      <div className="mt-10">
        <CommentSection slug={params.slug} />
      </div>
    </div>
  );
}