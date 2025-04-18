"use client";
import { useState } from "react";
import Link from "next/link";
// import { useLocale } from "next-intl";
// import { locales } from "../i18n";
import { Menu, X } from "lucide-react"; // 🔥 使用 Lucide icon

export default function Navbar() {
  //   const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a0a0a] text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          404 AI Not Found
        </Link>

        {/* 🔹 桌面版選單 */}
        <div className="hidden md:flex space-x-6">
          <NavItem href="/about" label="About" />
          <NavItem href="/blog" label="Blog" />
          {/* <NavItem href="/products" label="Products" />
          <NavItem href="/services" label="Services" /> */}
          <NavItem href="/resources" label="Resources" />
          <NavItem href="/contact" label="Contact" />
        </div>

        {/* 🔹 漢堡選單按鈕（行動版） */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
          aria-label="開啟選單"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 行動版選單 */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-900 py-5 mt-4 rounded-lg shadow-lg">
          <NavItem href="/about" label="About" mobile />
          <NavItem href="/blog" label="Blog" mobile />
          {/* <NavItem href="/services" label="Services" mobile /> */}
          <NavItem href="/resources" label="Resources" mobile />
          <NavItem href="/contact" label="Contact" mobile />
        </div>
      )}
    </nav>
  );
}

/* 🔥 NavItem 元件（避免重複程式碼） */
function NavItem({ href, label, mobile = false }) {
  return (
    <Link
      href={href}
      className={`text-gray-400 hover:text-white transition font-medium ${
        mobile ? "text-lg py-2 w-full text-center block" : "text-base"
      }`}
    >
      {label}
    </Link>
  );
}
