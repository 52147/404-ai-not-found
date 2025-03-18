// app/[locale]/page.js
export default function HomePage({ params: { locale } }) {
    return (
      <main>
        <h1>首頁 - 語系: {locale}</h1>
      </main>
    );
  }