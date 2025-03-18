import { NextIntlClientProvider } from "next-intl";
import enMessages from "../locales/en.json";
import zhMessages from "../locales/zh.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css";

export default function RootLayout({ children, params: { locale } }) {
  let messages = locale === "en" ? enMessages : zhMessages;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}