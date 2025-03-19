"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const myEmail = "ainotfound404321@gmail.com"; // 🔹 你的 Email

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const myEmail = "ainotfound404321@gmail.com"; // 🔹 你的 Email

    // 🔹 構造 mailto 連結
    const mailtoLink = `mailto:${myEmail}?subject=Contact Request from ${encodeURIComponent(
      name
    )}&body=👤 Name: ${encodeURIComponent(
      name
    )}%0A📧 Email: ${encodeURIComponent(
      email
    )}%0A%0A✉️ Message:%0A${encodeURIComponent(message)}`;

    // 🔹 直接打開 Email 客戶端
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
      <h1 className="text-4xl font-bold text-center">📩 Contact Us</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Got questions or business inquiries? Fill out the form below and send us
        an email!
      </p>

      {/* 🔹 表單 */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
          />
        </div>

        {/* 🔹 提交按鈕 */}
        <button
          type="submit"
          className="w-full p-3 text-lg font-semibold text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition"
        >
          🚀 Send Email
        </button>
      </form>

      {/* 🔹 直接提供 Email，讓他們自己開 Gmail 加附件 */}
      <div className="text-center mt-5">
        <p className="text-gray-700 dark:text-gray-300">
          Or email us directly at:
        </p>
        <a
          href={`mailto:${myEmail}`}
          className="text-blue-500 text-lg font-semibold hover:underline"
        >
          {myEmail}
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If you need to send attachments, open Gmail and send them manually.
        </p>
      </div>
    </div>
  );
}
