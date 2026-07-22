"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold text-white md:text-4xl"
      >
        Why <span className="gradient-text">{siteConfig.appName}</span>?
      </motion.h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
