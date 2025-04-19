export default function Resources() {
    const resources = [
      { name: "Kaggle", url: "https://www.kaggle.com/", icon: "📊", desc: "AI 資料集 & 競賽" },
      { name: "arXiv", url: "https://arxiv.org/", icon: "📌", desc: "AI 研究論文" },
      { name: "Hugging Face", url: "https://huggingface.co/", icon: "🤗", desc: "AI 模型平台" },
      { name: "Papers with Code", url: "https://paperswithcode.com/", icon: "📄", desc: "AI 研究 + 代碼" },
      { name: "Google AI", url: "https://ai.google/", icon: "🔍", desc: "Google AI 研究" },
      { name: "OpenAI", url: "https://openai.com/", icon: "🤖", desc: "OpenAI 研究" },
    ];
  
    return (
      <div className="max-w-3xl mx-auto p-5 space-y-5  shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
        <h1 className="text-3xl font-bold text-center mb-5">📚 AI 資源分享</h1>
        <p className="text-gray-500 text-center">探索最有價值的 AI 學習資源 🚀</p>
  
        {/* 🔹 用 Grid 來排列資源 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 transition-transform duration-200 hover:scale-105 hover:shadow-lg dark:hover:bg-gray-600"
            >
              <span className="text-2xl">{resource.icon}</span>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">{resource.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">{resource.desc}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }