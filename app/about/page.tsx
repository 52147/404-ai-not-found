"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 bg-white shadow-lg rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
      {/* 🔹 標題區 */}
      <h1 className="text-4xl font-bold text-center">💡 About Us</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        We build cutting-edge AI & web solutions to drive innovation.
      </p>

      {/* 🔹 Flexbox Cards: Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 transform duration-300 ease-in-out h-50">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            We believe in a world where AI enhances human creativity and
            productivity. Our mission is to develop smart, scalable AI solutions
            that solve real-world challenges.
          </p>
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 transform duration-300 ease-in-out h-50">
          <h2 className="text-2xl font-bold text-center">Our Core Services</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            From AI development to full-stack web applications, we provide
            end-to-end solutions for businesses, startups, and enterprises.
          </p>
        </div>
      </div>

      {/* 🔹 Technologies We Use */}
      <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition">
        <h2 className="text-2xl font-bold text-center mb-4">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["Python", "OpenAI API", "Next.js", "TailwindCSS", "Firebase", "AWS"].map(
            (tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full hover:scale-110 transition"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* 🔹 More Details: Flexbox Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 transform duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-center">AI Development</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-center">
            Custom AI solutions for automation, chatbots, and analytics.
          </p>
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 transform duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-center">Web Development</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-center">
            Scalable web apps using Next.js, Firebase, and AWS.
          </p>
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 transform duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-center">AI Consulting</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-center">
            Get expert advice on AI strategy, LLM fine-tuning, and GPT integrations.
          </p>
        </div>
      </div>

      {/* 🔹 CTA 區 */}
      <div className="text-center">
        <Link href="/contact">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}