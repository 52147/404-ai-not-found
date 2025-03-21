"use client";
import ProductCard from "./ProductCard"; // 確保這裡是正確的

const products = [
  {
    slug: "ai-chatbot",
    title: "🤖 AI Chatbot",
    description: "A conversational AI chatbot powered by GPT.",
    image: "/products/ai-chatbot.jpg",
  },
  {
    slug: "saas-platform",
    title: "🚀 AI SaaS Platform",
    description: "An AI-powered SaaS platform for automation.",
    image: "/products/saas-platform.jpg",
  },
  {
    slug: "data-analysis-tool",
    title: "📊 Data Analysis Tool",
    description: "AI-based predictive analytics for big data.",
    image: "/products/data-analysis.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 mt-20">
      <h1 className="text-4xl font-bold text-center">🛠️ Our Products</h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Explore our AI-powered applications and tools.
      </p>

      {/* 🔹 產品卡片 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}