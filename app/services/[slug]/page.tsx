"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Accordion from "../../components/Accordion"; // ✅ 确保正确引入

const serviceDetails = {
    "basic-website": {
      title: "🚀 Basic Website Development",
      price: "$500",
      description:
        "A simple yet effective 1-page website with a responsive design, perfect for small businesses or personal projects.",
      features: ["✔️ 1-page website", "✔️ Basic design", "✔️ Mobile-friendly"],
      examples: [
        { title: "Portfolio Website", image: "/examples/portfolio.jpg" },
        { title: "Landing Page", image: "/examples/landing-page.jpg" },
      ],
      testimonials: [
        { name: "John Doe", feedback: "The best website service ever!" },
        { name: "Jane Smith", feedback: "Fast, reliable, and great UI design." },
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      contact: "/contact",
      accordionSections: [
        {
          title: "📋 Pricing Breakdown",
          content: "This service costs $500, including a 1-page responsive website with a simple yet elegant design.",
        },
        {
          title: "⚡ Additional Services",
          content: "We offer extra features like custom domain setup, SEO optimization, and hosting setup.",
        },
        {
          title: "🔄 Process Steps",
          content: "1️⃣ Consultation → 2️⃣ Design Draft → 3️⃣ Development → 4️⃣ Revisions → 5️⃣ Final Deployment.",
        },
        {
          title: "❓ Frequently Asked Questions",
          content: "Q: How long does it take? A: Typically 3-5 business days for completion.",
        },
      ],
    },
    "ai-development": {
      title: "🤖 AI Product Development",
      price: "Starting from $2000",
      description:
        "We build AI-powered applications, including chatbots, AI-driven SaaS platforms, and GPT-based integrations.",
      features: [
        "✔️ AI chatbot development",
        "✔️ GPT API integration",
        "✔️ AI-powered SaaS platform",
      ],
      examples: [
        { title: "AI Chatbot", image: "/examples/ai-chatbot.jpg" },
        { title: "AI SaaS Platform", image: "/examples/ai-saas.jpg" },
      ],
      testimonials: [
        {
          name: "Tech Startup CEO",
          feedback: "This AI integration saved us hours of manual work!",
        },
        {
          name: "AI Researcher",
          feedback: "High-quality AI implementation with great support.",
        },
      ],
      techStack: ["Python", "OpenAI API", "TensorFlow"],
      contact: "/contact",
      accordionSections: [
        {
          title: "📋 Pricing Breakdown",
          content: "Pricing starts at $2000, varying based on project complexity and AI model integration.",
        },
        {
          title: "⚡ Additional Services",
          content: "We provide AI model training, fine-tuning, cloud deployment, and API integrations.",
        },
        {
          title: "🔄 Process Steps",
          content: "1️⃣ Requirement Analysis → 2️⃣ AI Model Selection → 3️⃣ Development → 4️⃣ Testing → 5️⃣ Deployment.",
        },
        {
          title: "❓ Frequently Asked Questions",
          content: "Q: Do you offer AI model fine-tuning? A: Yes, we can fine-tune models based on your data.",
        },
      ],
    },
  };

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto p-5 mt-20 text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="text-gray-500">
          The service you are looking for does not exist.
        </p>
        <Link href="/services">
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Back to Services
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
      {/* 🔹 Service Title & Price */}
      <h1 className="text-4xl font-bold text-center">{service.title}</h1>
      <p className="text-center text-gray-500">{service.price}</p>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        {service.description}
      </p>

      {/* 🔹 Features */}
      <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">✨ Features</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-center">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* 🔹 Example Showcase */}
      {service.examples && (
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            📸 Example Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.examples.map((example, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-40 object-cover"
                />
                <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                  {example.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔹 Testimonials */}
      {service.testimonials && (
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            💬 Testimonials
          </h2>
          <div className="space-y-4">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.feedback}"
                </p>
                <p className="text-right text-gray-500">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔹 Technology Stack */}
      {service.techStack && (
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">
            🛠️ Technology Used
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Accordion Sections */}
      {/* 🔹 Accordion Sections (动态加载) */}
      <Accordion sections={service.accordionSections} />
      {/* 🔹 Contact Button */}
      <div className="text-center">
        <Link href={service.contact}>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
