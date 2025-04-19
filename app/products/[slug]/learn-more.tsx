"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const learnMoreDetails = {
  "ai-chatbot": {
    title: "🤖 AI Chatbot - Learn More",
    overview: "An advanced AI-driven chatbot that enhances customer interactions.",
    benefits: [
      "✔️ Automates customer support, reducing workload.",
      "✔️ Provides 24/7 support for users.",
      "✔️ Customizable responses for personalized experiences.",
    ],
    useCases: [
      "💬 E-commerce chat assistants",
      "📞 Customer service automation",
      "🎮 AI-powered game NPCs",
    ],
    techStack: ["Python", "OpenAI API", "Next.js", "LangChain"],
    image: "/products/ai-chatbot.jpg",
  },
  "saas-platform": {
    title: "🚀 AI SaaS Platform - Learn More",
    overview: "A cloud-based AI-powered SaaS platform for workflow automation.",
    benefits: [
      "✔️ Streamlines business processes with AI automation.",
      "✔️ Scalable infrastructure for growing enterprises.",
      "✔️ Seamless API integration with third-party tools.",
    ],
    useCases: [
      "🏢 Business process automation",
      "📊 Data analytics platforms",
      "🔗 API-based SaaS solutions",
    ],
    techStack: ["React", "Node.js", "AWS", "Firebase"],
    image: "/products/saas-platform.jpg",
  },
  "data-analysis-tool": {
    title: "📊 Data Analysis Tool - Learn More",
    overview: "An AI-powered tool for predictive data analytics and insights.",
    benefits: [
      "✔️ Processes large datasets efficiently.",
      "✔️ Provides real-time predictive analytics.",
      "✔️ Generates detailed data visualizations.",
    ],
    useCases: [
      "📈 Financial market predictions",
      "🛒 E-commerce trend analysis",
      "🏥 Medical data analytics",
    ],
    techStack: ["Python", "Pandas", "TensorFlow", "Scikit-learn"],
    image: "/products/data-analysis.jpg",
  },
};

export default function LearnMore() {
  const { slug } = useParams();
  const product = learnMoreDetails[slug];

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold">Learn More - Page Not Found</h1>
        <p className="text-gray-500">The page you are looking for does not exist.</p>
        <Link href={`/products/${slug}`}>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Back to Product
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white mt-20">
      <h1 className="text-4xl font-bold text-center">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-lg" />
      <p className="text-gray-700 dark:text-gray-300">{product.overview}</p>

      {/* 🔹 Benefits */}
      <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">✨ Key Benefits</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {product.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* 🔹 Use Cases */}
      <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">🔍 Use Cases</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {product.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>

      {/* 🔹 Technology Stack */}
      <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">🛠️ Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {product.techStack.map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 🔹 Back Button */}
      <div className="text-center">
        <Link href={`/products/${slug}`}>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition">
            Back to Product
          </button>
        </Link>
      </div>
    </div>
  );
}