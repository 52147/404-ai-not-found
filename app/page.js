import React from "react";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-5 space-y-8 relative overflow-hidden">
      <div className="bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20 flex flex-col items-center justify-center space-y-10 w-full max-w-4xl p-10">
        
        {/* 🔹 Header 區塊 */}
        <header className="text-center flex flex-col items-center space-y-3">
          <h1 className="text-5xl font-bold text-blue-500 animate-fade-in">
            讓 AI 學習變得簡單！
          </h1>
          <p className="text-xl text-gray-400">從 0 到 1，學習最前沿的 AI 技術 🧠</p>
        </header>

        {/* 🔹 Call to Action (CTA) 區塊 */}
        <section className="text-center w-full max-w-3xl px-8 py-10 bg-gray-700 rounded-lg shadow-lg flex flex-col items-center space-y-6">
          <p className="text-lg text-gray-300">
            探索最前沿的 AI 知識，從這裡開始！
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full justify-center">
            <a
              href="/blog"
              className="w-full md:w-auto px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition transform hover:scale-105 text-center"
            >
              📖 開始學習 AI（Blog）
            </a>
            <a
              href="/resources"
              className="w-full md:w-auto px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 hover:shadow-lg transition transform hover:scale-105 text-center"
            >
              🛠 免費 AI 資源（立即探索）
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-5">
            💬 加入我們的 <a href="https://discord.gg/your-link" className="text-blue-400 underline hover:text-blue-500">AI 學習社群</a>
          </p>
        </section>

        {/* 🔹 服務區塊（使用 Grid 來優化排列） */}
        <section className="w-full max-w-3xl px-8 py-10 bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">我們的服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-5 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-600 transition">
              🎯 <strong className="ml-2">AI 技術文章分享</strong>
            </div>
            <div className="flex items-center p-5 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-600 transition">
              🛠 <strong className="ml-2">最新 AI 工具與資源</strong>
            </div>
            <div className="flex items-center p-5 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-600 transition">
              💬 <strong className="ml-2">AI 相關討論社群</strong>
            </div>
            <div className="flex items-center p-5 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-600 transition">
              🚀 <strong className="ml-2">AI 項目合作與諮詢</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}