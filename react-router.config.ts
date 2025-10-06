import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`

  basename: "/Countries-Explorer/",
  ssr: false,
} satisfies Config;
// 是否开启 SSR（服务端渲染）
  // - true = 使用 SSR，适合有服务器的部署（如 Vercel、Node 服务器）
  // - false = 使用 SPA（单页应用），适合静态托管（如 GitHub Pages）
  // ⚠️ GitHub Pages 是纯静态的，没有服务器，
  // 所以必须设置为 false，否则页面刷新会 404。