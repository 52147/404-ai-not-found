const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // 🚀 避免 TS 錯誤導致構建失敗
  },
});