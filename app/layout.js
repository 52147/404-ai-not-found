
import "./globals.css";

// 假設 Header 與 Footer 元件分別放在 components 資料夾中
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function RootLayout({ children, params }) {

  return (
    <html >
      <body className="min-h-screen flex flex-col">
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
          {/* 🔹 Navbar 固定在頂部 */}
          <Navbar />

          {/* 🔹 主內容區塊 `flex-grow` 讓內容自適應 */}
          <main className="flex-grow">{children}</main>

          {/* 🔹 Footer 自動貼底 */}
          <Footer />
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}