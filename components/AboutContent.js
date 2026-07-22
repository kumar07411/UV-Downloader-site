"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const steps = [
  {
    num: "1",
    title: "Download the APK",
    desc: "Tap the Download button on the home page to get the latest APK file.",
  },
  {
    num: "2",
    title: "Allow unknown sources",
    desc: "In your phone settings, allow installs from this browser or file manager.",
  },
  {
    num: "3",
    title: "Install & open",
    desc: "Open the downloaded file, tap Install, and launch the app. Done!",
  },
];

const faqs = [
  {
    q: "Is UV Downloader free?",
    a: "Yes, it's 100% free with no hidden charges or subscriptions.",
  },
  {
    q: "Is it safe to install?",
    a: "Yes. The app is distributed directly from our official GitHub releases and collects no personal data.",
  },
  {
    q: "Why do I need to allow unknown sources?",
    a: "Because the app is installed directly (not from the Play Store), Android asks for one-time permission to install it.",
  },
  {
    q: "How do I get updates?",
    a: "Just visit this website and download the latest version — the download button always points to the newest release.",
  },
];

export default function AboutContent() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="blob left-[-10%] top-[-5%] h-80 w-80 bg-purple-600" />
      <div
        className="blob right-[-10%] top-[40%] h-80 w-80 bg-cyan-500"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-24 md:pt-28">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold text-white md:text-5xl"
        >
          About <span className="gradient-text">{siteConfig.appName}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-400"
        >
          {siteConfig.description}
        </motion.p>

        {/* How to install */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center text-2xl font-bold text-white md:text-3xl"
        >
          How to Install
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl glow-btn text-xl font-bold text-white">
                {s.num}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center text-2xl font-bold text-white md:text-3xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {f.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
