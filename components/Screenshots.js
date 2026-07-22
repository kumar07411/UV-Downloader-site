"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const AUTO_DELAY = 2000; // har 2 second me agli slide

export default function Screenshots() {
  const shots = siteConfig.screenshots;
  // Seamless loop ke liye slides do baar render hoti hain
  const slides = [...shots, ...shots];
  const [index, setIndex] = useState(0); // 0 .. slides.length-1
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const resetTimer = useRef(null);
  const displayIndex = index % shots.length; // dots/caption ke liye

  const scrollToSlide = useCallback((i, smooth = true) => {
    const track = trackRef.current;
    const slide = track?.children[i];
    if (track && slide) {
      track.scrollTo({
        left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }, []);

  const goTo = useCallback(
    (i) => {
      if (i < 0) i += shots.length;

      if (i >= slides.length) {
        const equivalent = i % shots.length;
        setIndex(equivalent);
        scrollToSlide(equivalent, false);
        return;
      }

      setIndex(i);
      scrollToSlide(i, true);

      // Second copy me pahunch gaye to animation ke baad seamless reset
      if (i >= shots.length) {
        clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => {
          const equivalent = i % shots.length;
          setIndex(equivalent);
          scrollToSlide(equivalent, false);
        }, 600);
      }
    },
    [shots.length, slides.length, scrollToSlide]
  );

  // Manual scroll/swipe par center wali slide ko active banao (zoom follow kare)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let min = Infinity;
        for (let i = 0; i < track.children.length; i++) {
          const el = track.children[i];
          const elCenter = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(elCenter - center);
          if (d < min) {
            min = d;
            closest = i;
          }
        }
        setIndex((prev) => (prev === closest ? prev : closest));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Auto slide (hover/touch par pause) — hamesha aage
  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) goTo(index + 1);
    }, AUTO_DELAY);
    return () => clearInterval(t);
  }, [index, goTo]);

  return (
    <section id="screenshots" className="relative overflow-hidden pb-4 pt-14">
      <div className="relative mx-auto max-w-6xl px-0 sm:px-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-5 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          See it in <span className="gradient-text">Action</span>
        </motion.h2>

        <div
          className="relative mt-8"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() =>
            setTimeout(() => (pausedRef.current = false), 4000)
          }
        >
          {/* Slides track — user khud bhi scroll/swipe kar sakta hai */}
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc(50%-105px)] pb-4 sm:px-[calc(50%-115px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((shot, i) => (
              <div
                key={`${shot.src}-${i}`}
                className="snap-center shrink-0"
                onClick={() => goTo(i)}
              >
                <div
                  className={`glass overflow-hidden rounded-[1.8rem] border-white/10 p-2 transition-all duration-300 ${
                    i === index ? "scale-100 opacity-100" : "scale-90 opacity-50"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={230}
                    height={470}
                    priority={i === 0}
                    className="h-[430px] w-[210px] rounded-[1.4rem] object-cover object-top sm:h-[470px] sm:w-[230px]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <p className="mx-auto mt-2 max-w-xs px-5 text-center text-xs text-gray-500 sm:text-sm">
            {shots[displayIndex].alt}
          </p>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {shots.map((s, i) => (
              <button
                key={s.src}
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === displayIndex
                    ? "w-6 bg-gradient-to-r from-purple-500 to-cyan-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
