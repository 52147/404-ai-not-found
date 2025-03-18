import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // 先等待 requestLocale Promise 解決，取得實際的 locale 字串
  const requested = await requestLocale;
  const locale = requested || 'zh';

  // 根據解析出來的 locale 加載對應的訊息檔案
  const messages = (await import(`../app/locales/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});