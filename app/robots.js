export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://uv-downloader.vercel.app/sitemap.xml",
  };
}