"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // 新增 loading 狀態

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("✅ 表單提交成功！");
      console.log("提交的資料：", formData);
      setFormData({ name: "", email: "", message: "" }); // 清空表單
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
      {/* 🔹 標題區 */}
      <h1 className="text-4xl font-bold text-center">聯絡我們</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        有任何問題或合作意向？請填寫以下表單，我們會盡快回覆！
      </p>

      {/* 🔹 表單 */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">你的名字</label>
          <input
            type="text"
            name="name"
            placeholder="輸入你的名字"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">你的 Email</label>
          <input
            type="email"
            name="email"
            placeholder="輸入你的 Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">你的訊息</label>
          <textarea
            name="message"
            placeholder="輸入你的訊息"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
          />
        </div>

        {/* 🔹 提交按鈕 */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 text-lg font-semibold text-white rounded-lg transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "提交中..." : "🚀 送出表單"}
        </button>
      </form>
    </div>
  );
}