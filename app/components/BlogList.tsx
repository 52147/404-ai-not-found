"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogList({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchTag = selectedTag === "" || post.tags.includes(selectedTag);

    return matchSearch && matchTag;
  });

  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold">📖 我的 Blog</h1>
      </div>
      {/* 🔍 搜尋框 */}
      <div className="relative">
        <input
          type="text"
          placeholder="搜尋文章..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pr-10 border rounded dark:bg-gray-700 dark:text-white"
          autoFocus
          autoComplete="off"
          spellCheck="false"
          aria-label="搜尋文章"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
          >
            ✖
          </button>
        )}
      </div>
      {/* 🏷️ 標籤篩選 */}
      <div className="mb-5 flex flex-wrap mt-3">
        {["全部文章", ...new Set(posts.flatMap((post) => post.tags))].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === "全部文章" ? "" : tag)}
              className={`px-3 py-1 mr-2 text-sm rounded transition mb-3 ${
                selectedTag === tag
                  ? "bg-blue-600 text-white font-bold shadow-md"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </div>
      {/* 📜 文章列表 */}
      {filteredPosts.length === 0 ? (
        <div className="text-gray-500 text-center">
          <p>❌ 沒有找到符合條件的文章</p>
          {searchQuery || selectedTag ? (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("");
              }}
              className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              🔄 清除篩選條件
            </button>
          ) : null}
        </div>
      ) : (
        filteredPosts.map((post) => (
          <li
            key={post.slug}
            className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-10 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer list-none flex flex-row items-center gap-10 display-flex align-items-center"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline text-lg font-bold mb-1 dark:text-blue-400 dark:hover:text-blue-300 w-90 h-30 display-flex align-items-center"
              style={{ display: "flex", alignItems: "center" }}
            >
              {post.title}
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-tight w-30">
              {post.description}
              <br />由 {post.author} 發表
              <br />
              文章長度: {post.content.split(" ").length} 字
              <br />
              📅 {post.date}
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 bg-gray-200 px-2 py-1 rounded dark:bg-gray-700 dark:text-white mb-4"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))
      )}{" "}
    </div>
  );
}
