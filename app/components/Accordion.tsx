"use client";
import { useState } from "react";


export default function Accordion({ sections }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
          style={{ transition: "max-height 0.3s ease" }}
        >
          <button
            className="w-full text-left px-6 py-3 font-bold text-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
          </button>
          {openSection === section.title && (
            <div className="p-4 text-gray-700 dark:text-gray-300">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}