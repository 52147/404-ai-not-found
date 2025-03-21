"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const productDetails = {
  "ai-chatbot": {
    title: "🤖 AI Chatbot",
    description: "A conversational AI chatbot powered by GPT.",
    features: [
      "✔️ NLP-based conversation",
      "✔️ Customizable responses",
      "✔️ API integration",
    ],
    image: "/products/ai-chatbot.jpg",
    techStack: ["Python", "OpenAI API", "Next.js"],
    demoLink: "https://demo.ai-chatbot.com",
    repoLink: "https://github.com/your-repo/ai-chatbot",
  },
  "saas-platform": {
    title: "🚀 AI SaaS Platform",
    description: "An AI-powered SaaS platform for automation.",
    features: [
      "✔️ AI-driven workflow",
      "✔️ Cloud-based storage",
      "✔️ Scalable architecture",
    ],
    image: "/products/saas-platform.jpg",
    techStack: ["React", "Node.js", "AWS"],
    demoLink: "https://demo.saas-platform.com",
    repoLink: "",
  },
  "data-analysis-tool": {
    title: "📊 Data Analysis Tool",
    description: "AI-based predictive analytics for big data.",
    features: [
      "✔️ Real-time analysis",
      "✔️ Predictive modeling",
      "✔️ Data visualization",
    ],
    image: "/products/data-analysis.jpg",
    techStack: ["Python", "Pandas", "TensorFlow"],
    demoLink: "",
    repoLink: "https://github.com/your-repo/data-analysis-tool",
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productDetails[slug];

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="text-gray-500">
          The product you are looking for does not exist.
        </p>
        <Link href="/products">
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Back to Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white mt-20">
      <Link href="/products">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Back to Products
        </button>
      </Link>

      <h1 className="text-4xl font-bold text-center">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-lg"
      />
      <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

      <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">✨ Features</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {product.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-center mt-6">
        {product.demoLink && (
          <a
            href={product.demoLink}
            target="_blank"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition mr-4"
          >
            View Demo
          </a>
        )}
        {product.repoLink && (
          <a
            href={product.repoLink}
            target="_blank"
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}
