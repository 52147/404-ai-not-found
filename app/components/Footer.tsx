import React from "react";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 text-gray-500 text-center border-t border-gray-700 py-6 dark:text-gray-400 bg-gray-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-3">
        {/* 🔹 版權資訊 */}
        <p className="text-sm">&copy; 2025 404 AI Not Found. All rights reserved.</p>

        {/* 🔹 社交媒體連結 */}
        <div className="flex space-x-6 mt-2">
          <a
            href="https://twitter.com/youraccount"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-lg" />
            <span>Twitter</span>
          </a>
          <a
            href="https://linkedin.com/in/youraccount"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://youtube.com/yourchannel"
            className="flex items-center space-x-2 text-red-400 hover:text-red-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-lg" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
}