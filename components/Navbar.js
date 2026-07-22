"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] shadow-lg shadow-black/30"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-5 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.appName} logo`}
            width={40}
            height={40}
            className="h-11 w-11 shrink-0 rounded-xl sm:h-14 sm:w-14"
            priority
          />
          <span className="truncate text-base font-semibold text-white sm:text-lg">
            {siteConfig.appName}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glow-btn relative rounded-xl px-3 py-1.5 text-sm font-bold text-white shadow-lg shadow-black/40 ring-1 ring-white/20 transition-transform hover:scale-105 active:scale-95 sm:px-4 sm:py-2"
            >
              <span className="relative [text-shadow:0_2px_6px_rgba(0,0,0,0.7)]">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
