"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EntranceLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const storageKey = "portfolio-intro-seen";
    if (window.sessionStorage.getItem(storageKey)) {
      const skipTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(skipTimer);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(storageKey, "true");
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, reduceMotion ? 150 : 1100);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink text-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          transition={{ duration: reduceMotion ? 0.1 : 0.65, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-live="polite"
          aria-label="页面正在加载"
        >
          <div className="micro-label absolute inset-x-6 top-8 flex justify-between uppercase text-paper/50 md:inset-x-10">
            <span>PERSONAL PORTFOLIO / 26</span>
            <span>INTRO</span>
          </div>

          <div className="w-[min(82vw,56rem)]">
            <div className="overflow-hidden">
              <motion.p
                className="micro-label text-accent"
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                HELLO, I&apos;M
              </motion.p>
            </div>
            <div className="mt-4 overflow-hidden">
              <motion.h1
                className="display-slogan text-[clamp(4rem,13vw,11rem)] font-normal leading-none tracking-[-.06em]"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.18, duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                应宇烽<span className="text-accent">。</span>
              </motion.h1>
            </div>

            <div className="mt-10 h-px overflow-hidden bg-paper/20">
              <motion.div
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.1, duration: reduceMotion ? 0.1 : 0.75, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </div>

          <motion.div
            className="pointer-events-none absolute -bottom-[40vw] right-[-18vw] h-[70vw] w-[70vw] rounded-full border border-paper/10"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
