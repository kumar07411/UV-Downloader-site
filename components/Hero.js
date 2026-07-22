"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { formatBytes } from "@/lib/github";

export default function Hero({ release }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="blob left-[-10%] top-[-10%] h-96 w-96 bg-purple-600" />
      <div
        className="blob right-[-10%] top-[30%] h-80 w-80 bg-cyan-500"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-5 sm:pb-24 sm:pt-24 md:pt-32">
        {/* Version badge */}
        {release?.version && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 rounded-full px-4 py-1.5 text-sm text-cyan-300"
          >
            🚀 Latest version: <b>{release.version}</b>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl"
        >
          Download <span className="gradient-text">{siteConfig.appName}</span>{" "}
          for Android
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-gray-400 sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          {release ? (
            <motion.a
              href={release.downloadUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="glow-btn inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-base font-bold text-white sm:gap-3 sm:px-10 sm:py-4 sm:text-lg"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
              Download APK
              {release.fileSize ? (
                <span className="text-sm font-normal opacity-80">
                  ({formatBytes(release.fileSize)})
                </span>
              ) : null}
            </motion.a>
          ) : (
            <div className="glass rounded-2xl px-8 py-4 text-gray-400">
              ⚠️ Release nahi mili — <code>lib/config.js</code> me apna GitHub
              username/repo set karein aur repo me ek release publish karein.
            </div>
          )}

          {release?.downloadCount != null && (
            <p className="mt-4 text-sm text-gray-500">
              ⬇ {release.downloadCount.toLocaleString()} downloads of this
              version
            </p>
          )}

          {/* Bulk downloader highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glow-btn mx-auto mt-8 inline-flex max-w-xl items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white sm:text-base"
          >
            ⚡ Bulk Downloader — YouTube, Instagram, X & TikTok ke poore
            channel / profile ek click me
          </motion.div>

          {/* Supported platforms quick pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            {["YouTube", "Instagram", "TikTok", "X (Twitter)", "Facebook", "1000+ more"].map(
              (p) => (
                <span
                  key={p}
                  className="glass rounded-full px-3 py-1 text-gray-300"
                >
                  {p}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Stats row */}
        {siteConfig.stats?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4"
          >
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-3 py-5 text-center">
                <div className="gradient-text text-xl font-extrabold sm:text-2xl md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-gray-400 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
