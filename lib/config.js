// ===============================================
//  SITE CONFIG — yahan apni details badlein
// ===============================================

export const siteConfig = {
  // App ka naam
  appName: "UV Downloader",

  // Chhota tagline (hero section me dikhega)
  tagline: "The Universal Video Downloader for Android",

  // App ke baare me short description
  description:
    "UV Downloader is a fast, free, all-in-one Android video downloader. Paste ANY link from 1000+ websites — YouTube, Instagram, TikTok, X (Twitter), Facebook and more. Download full YouTube channels & playlists, or every video from an Instagram / X / TikTok profile in one click. Save video (up to 4K), MP3 audio, thumbnails and subtitles.",

  // Logo (public/ folder me hai)
  logo: "/logo.png",

  // Privacy policy link
  privacyUrl:
    "https://kumar07411.github.io/App-Privacy-Policy/uv_downloader/",

  github: {
    owner: "kumar07411",
    repo: "UV-Downloader",
  },

  // ⬇️ FALLBACK — agar GitHub API fail ho (rate limit etc.) to ye use hoga
  // taaki download button hamesha kaam kare. Naya release aane par bas
  // version aur URL yahan update kar dein (optional).
  fallback: {
    version: "v1.0",
    downloadUrl:
      "https://github.com/kumar07411/UV-Downloader/releases/download/v1.0/uv.downloader.v1.0.apk",
    fileName: "uv.downloader.v1.0.apk",
    fileSize: 94.3 * 1024 * 1024, // ~94.3 MB
  },

  // Headline stats (hero ke neeche dikhengi)
  stats: [
    { value: "Bulk", label: "Downloader" },
    { value: "1-Click", label: "Full Profile / Channel" },
    { value: "YT · IG · X · TikTok", label: "Bulk supported" },
  ],

  // App ki features (home page pe dikhengi)
  features: [
    {
      icon: "🌐",
      title: "Universal Downloader",
      desc: "Paste ANY video URL — 1000+ websites supported including Vimeo, Dailymotion, Facebook and more.",
    },
    {
      icon: "📺",
      title: "Full YouTube Channel",
      desc: "Grab every video from an entire YouTube channel or playlist in one tap — videos + shorts together.",
    },
    {
      icon: "👤",
      title: "Whole Profiles at Once",
      desc: "Download ALL videos, reels & posts from any Instagram, X (Twitter) or TikTok profile in one click.",
    },
    {
      icon: "🎬",
      title: "Up to 4K Quality",
      desc: "Pick your MP4 quality — 4K, 2K, 1080p, 720p, 480p and more.",
    },
    {
      icon: "🎵",
      title: "MP3 Audio",
      desc: "Extract any video's audio as MP3 at 320 / 192 / 128 kbps.",
    },
    {
      icon: "🚫",
      title: "No Watermark",
      desc: "Download TikTok & other videos in full quality without any watermark.",
    },
    {
      icon: "🖼️",
      title: "Thumbnails & Subtitles",
      desc: "Save HD cover images and download subtitles as SRT in your language.",
    },
    {
      icon: "⏯️",
      title: "Pause & Resume",
      desc: "Queue bulk downloads and pause or resume them anytime.",
    },
    {
      icon: "🔒",
      title: "Safe & Private",
      desc: "No data collection. Your privacy is our priority.",
    },
  ],

  // Supported platforms (Platforms section me dikhengi)
  platforms: [
    {
      name: "YouTube",
      color: "#FF0000",
      points: [
        "Video up to 4K / 2K",
        "Shorts in full quality",
        "MP3 audio 320/192/128 kbps",
        "Full playlist download",
        "Full channel — every video at once",
        "Thumbnails & subtitles (SRT)",
      ],
    },
    {
      name: "Instagram",
      color: "#E1306C",
      points: [
        "Single Post / Reel in best quality",
        "Full profile — all posts & reels",
        "Download all in one tap",
        "MP3 audio / sound",
      ],
    },
    {
      name: "TikTok",
      color: "#FE2C55",
      points: [
        "Single video — no watermark",
        "Full creator profile",
        "Download all with pause/resume",
        "MP3 sound",
      ],
    },
    {
      name: "X (Twitter)",
      color: "#1DA1F2",
      points: [
        "Single video / tweet",
        "Full account — all videos",
        "Download all with pause/resume",
        "MP3 audio",
      ],
    },
    {
      name: "Facebook",
      color: "#1877F2",
      points: ["Any video link", "Best quality MP4", "MP3 audio"],
    },
    {
      name: "1000+ More",
      color: "#7c3aed",
      points: [
        "Vimeo, Dailymotion & more",
        "Just paste any video link",
        "Best quality MP4",
        "Extract audio as MP3",
      ],
    },
  ],

  // App screenshots (Screenshots gallery me dikhengi)
  screenshots: [
    { src: "/screenshots/01-universal.jpg", alt: "Universal downloader — paste any URL" },
    { src: "/screenshots/02-youtube.jpg", alt: "YouTube video, shorts, playlist & channel" },
    { src: "/screenshots/03-tiktok.jpg", alt: "TikTok download without watermark" },
    { src: "/screenshots/04-x.jpg", alt: "X (Twitter) video download" },
    { src: "/screenshots/05-instagram.jpg", alt: "Instagram posts & reels" },
    { src: "/screenshots/06-channel.jpg", alt: "Download an entire YouTube channel" },
    { src: "/screenshots/07-profile.jpg", alt: "Download a whole Instagram profile" },
    { src: "/screenshots/08-xprofile.jpg", alt: "Download a whole X profile" },
  ],
};
