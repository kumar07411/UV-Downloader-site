"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function Platforms() {
  return (
    <section id="platforms" className="mx-auto max-w-6xl px-5 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold text-white md:text-4xl"
      >
        Download from <span className="gradient-text">Anywhere</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
      >
        One app for every platform. Paste a single video link, an entire
        playlist, or a full profile — UV Downloader grabs it all.
      </motion.p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass relative overflow-hidden rounded-2xl p-6"
          >
            {/* Colored accent bar */}
            <span
              className="absolute left-0 top-0 h-1.5 w-full"
              style={{ background: p.color }}
            />
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white"
                style={{ background: p.color }}
              >
                {p.name.charAt(0)}
              </span>
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            </div>

            <ul className="mt-4 space-y-2">
              {p.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: p.color }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
