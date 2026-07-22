import { siteConfig } from "./config";

// config me di gayi fallback details se ek release object banata hai.
// Ye tab use hota hai jab GitHub API fail ho (rate limit, network, etc.)
function fallbackRelease() {
  const fb = siteConfig.fallback;
  if (!fb || !fb.downloadUrl) return null;
  return {
    version: fb.version || "",
    publishedAt: null,
    notes: "",
    downloadUrl: fb.downloadUrl,
    fileName: fb.fileName || null,
    fileSize: fb.fileSize || null,
    downloadCount: null,
  };
}

// GitHub se latest release fetch karta hai.
// Response 5 minute ke liye cache hota hai taaki API rate limit na lage.
// Agar API fail ho jaaye to config.fallback use hota hai.
export async function getLatestRelease() {
  const { owner, repo } = siteConfig.github;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) return fallbackRelease();

    const data = await res.json();

    // Release assets me se .apk file dhundo
    const apk = (data.assets || []).find((a) =>
      a.name.toLowerCase().endsWith(".apk")
    );

    // Agar API se sahi data nahi mila to fallback
    if (!data.tag_name && !data.name) return fallbackRelease();

    return {
      version: data.tag_name || data.name || "",
      publishedAt: data.published_at || null,
      notes: data.body || "",
      downloadUrl: apk ? apk.browser_download_url : data.html_url,
      fileName: apk ? apk.name : null,
      fileSize: apk ? apk.size : null,
      downloadCount: apk ? apk.download_count : null,
    };
  } catch {
    return fallbackRelease();
  }
}

export function formatBytes(bytes) {
  if (!bytes) return "";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}
