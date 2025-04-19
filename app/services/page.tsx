import Link from "next/link";

const services = [
  {
    slug: "basic-website",
    title: "🚀 Basic Website",
    price: "$500",
    features: ["✔️ 1-page website", "✔️ Basic design", "✔️ Responsive layout"],
  },
  {
    slug: "advanced-website",
    title: "⚡ Advanced Website",
    price: "$1200",
    features: [
      "✔️ 5-page website",
      "✔️ Custom UI design",
      "✔️ Basic backend functionality",
    ],
  },
  {
    slug: "full-website",
    title: "🔥 Full Website",
    price: "$3000",
    features: [
      "✔️ Custom frontend + backend",
      "✔️ API integration",
      "✔️ Advanced UI/UX design",
    ],
  },
  {
    slug: "ai-development",
    title: "🤖 AI Product Development",
    price: "Starting from $2000",
    features: [
      "✔️ AI chatbot development",
      "✔️ GPT API integration",
      "✔️ AI SaaS platform",
    ],
  },
  {
    slug: "ai-consulting",
    title: "📊 AI Consulting",
    price: "$100 / hour",
    features: [
      "✔️ AI technology & product consulting",
      "✔️ LLM selection & fine-tuning",
      "✔️ AI business strategy",
    ],
  },
  {
    slug: "ai-data-analysis",
    title: "📈 AI Data Analysis",
    price: "Starting from $1500",
    features: [
      "✔️ Data cleaning & AI analysis",
      "✔️ NLP / CV projects",
      "✔️ Predictive model development",
    ],
  },
  {
    slug: "maintenance-monthly",
    title: "📆 Monthly Maintenance",
    price: "$50 / month",
    features: [
      "✔️ 2 updates per month",
      "✔️ Website monitoring",
      "✔️ Bug fixes",
    ],
  },
  {
    slug: "maintenance-annual",
    title: "📅 Annual Maintenance",
    price: "$500 / year",
    features: [
      "✔️ 4 updates per month",
      "✔️ Security checks",
      "✔️ Advanced maintenance",
    ],
  },
  {
    slug: "maynard-premium",
    title: "🌟 Maynard's Premium Plan",
    price: "$5000",
    features: [
      "✔️ Custom AI & website integration",
      "✔️ Exclusive business consulting",
      "✔️ AI-driven automation",
    ],
  },
  {
    slug: "maynard-ultimate",
    title: "🚀 Maynard's Ultimate Plan",
    price: "$10,000",
    features: [
      "✔️ Full-stack AI & web solution",
      "✔️ Advanced automation & AI modeling",
      "✔️ VIP 24/7 support & consultation",
    ],
  },
];

const sections = [
  { id: "website-dev", title: "🌐 Website Development" },
  { id: "ai-services", title: "🤖 AI Services" },
  { id: "maintenance", title: "🔧 Maintenance Plans" },
  { id: "maynard-plans", title: "💎 Maynard's Exclusive Plans" },
];

export default function Services() {
  return (
    <div className="flex ">
      {/* 左侧固定 Sidebar */}
      <div className="w-1/4 h-screen top-20 p-5 hidden md:block fixed dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-5">🗂️ Service Categories</h1>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-bold mb-3">🔍 Quick Navigation</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block text-blue-500 hover:text-blue-700 transition"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 右侧内容区域 */}
      <div className="w-3/4 max-w-4xl mx-auto p-5 space-y-6 mt-20">
        <h1 className="text-4xl font-bold text-center">💡 Our Services</h1>
        <p className="text-gray-500 text-center">
          Choose the plan that suits you:
        </p>

        {/* Website Development Plans */}
        <div id="website-dev">
          <h2 className="text-3xl font-bold text-center mt-10 mb-5">
            🌐 Website Development Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div id="ai-services">
          <h2 className="text-3xl font-bold text-center mt-10 mb-5">
            🤖 AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(3, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div id="maintenance">
          <h2 className="text-3xl font-bold text-center mt-10 mb-5">
            🔧 Maintenance Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(6, 8).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Maynard’s Exclusive Plans */}
        <div id="maynard-plans">
          <h2 className="text-3xl font-bold text-center mt-10 mb-5">
            💎 Maynard's Exclusive Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(8).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 复用的服务卡片组件
function ServiceCard({ service }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center">{service.title}</h3>
      <p className="text-center text-gray-500">{service.price}</p>
      <ul className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link href={`/services/${service.slug}`}>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </Link>
    </div>
  );
}
