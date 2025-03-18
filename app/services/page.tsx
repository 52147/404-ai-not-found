export default function Services() {
    return (
      <div className="max-w-3xl mx-auto p-5 space-y-5 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white mt-20">
        <h1 className="text-3xl font-bold mb-5 text-center">💡 服務項目</h1>
        <p className="text-gray-500 text-center">我們提供以下服務：</p>
  
        {/* 🔹 改用 Flexbox 卡片排列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {[
            "AI 產品開發",
            "AI 技術顧問 & 諮詢",
            "AI 工具開發",
            "網站 & APP 開發",
            "其他專案合作",
            "AI 教學 & 培訓",
            "AI 資料分析",
            "AI 研究 & 實驗",
            "AI 資源分享",
            "AI 社群活動",
            "AI 產品設計",
            "AI 產品行銷",
          ].map((service, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 flex items-center justify-center text-lg font-semibold transition-transform duration-200 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
               {service}
            </div>
          ))}
        </div>
      </div>
    );
  }