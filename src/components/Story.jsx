import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookStyleTestimonials({ items }) {
  const testimonials = useMemo(
    () =>
      items && items.length > 0
        ? items
        : [
            {
              quote:
                "This product felt like a breath of fresh air—clean UI, smart defaults, and support that actually cares.",
              author: "Ava Thompson",
              role: "Product Manager, Orbit",
              avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320&auto=format&fit=crop",
            },
            {
              quote:
                "We shipped 2x faster after moving to this stack. The learning curve was tiny and the payoff was huge.",
              author: "Noah Patel",
              role: "Engineering Lead, Hydra",
              avatar:
                "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=320&auto=format&fit=crop",
            },
            {
              quote:
                "It’s rare to see design and developer experience so well balanced. Our team loves it.",
              author: "Maya Chen",
              role: "Design Director, Kora",
              avatar:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=320&auto=format&fit=crop",
            },
          ],
    [items]
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };
  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="w-full py-12 px-4 flex justify-center">
      <div className="relative w-full max-w-5xl">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700 z-20" />

          {/* Left Page */}
          <div className="relative p-8 md:p-10 bg-white dark:bg-neutral-950">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-100 to-transparent dark:from-neutral-900" />

            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={`left-${index}`}
                custom={dir}
                initial={{
                  rotateY: dir === 1 ? 15 : -15,
                  opacity: 0,
                  x: dir === 1 ? -20 : 20,
                }}
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={{
                  rotateY: dir === 1 ? -15 : 15,
                  opacity: 0,
                  x: dir === 1 ? 20 : -20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  duration: 0.45,
                }}
                className="origin-left"
              >
                <QuoteMark />
                <p className="text-lg md:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">
                  {current.quote}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-4">
              <Avatar src={current.avatar} alt={current.author} />
              <div>
                <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  {current.author}
                </h4>
                {current.role && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {current.role}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Page */}
          <div className="relative p-8 md:p-10 bg-white dark:bg-neutral-950">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-100 to-transparent dark:from-neutral-900" />
            <div className="absolute right-0 bottom-0 w-24 h-24 overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-neutral-200 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rotate-45 translate-x-6 translate-y-6 rounded-md shadow" />
            </div>

            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={`right-${index}`}
                custom={dir}
                initial={{
                  rotateY: dir === 1 ? -15 : 15,
                  opacity: 0,
                  x: dir === 1 ? 20 : -20,
                }}
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={{
                  rotateY: dir === 1 ? 15 : -15,
                  opacity: 0,
                  x: dir === 1 ? -20 : 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  duration: 0.45,
                }}
                className="origin-right h-full flex flex-col"
              >
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <Stars />
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 max-w-sm">
                      "Turning the page on our old stack was the best decision.
                      Each release feels smoother than the last."
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                  >
                    Previous
                  </button>
                  <Pager
                    total={testimonials.length}
                    index={index}
                    onDot={(i) => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                  />
                  <button
                    onClick={next}
                    className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mx-auto mt-6 h-6 w-3/4 rounded-full bg-gradient-to-r from-transparent via-black/20 to-transparent blur-xl opacity-40 dark:via-black/50" />
      </div>
    </div>
  );
}

function Avatar({ src, alt }) {
  return (
    <div className="relative h-12 w-12 rounded-full ring-2 ring-neutral-200 dark:ring-neutral-700 overflow-hidden">
      {src ? (
        <img src={src} alt={alt || ""} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-neutral-200 dark:bg-neutral-700" />
      )}
    </div>
  );
}

function QuoteMark() {
  return (
    <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-300">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V20h8v-8H7.17A3.17 3.17 0 0 1 10.34 8H12V6H7.17Zm10 0A5.17 5.17 0 0 0 12 11.17V20h8v-8h-2.83A3.17 3.17 0 0 1 20.34 8H22V6h-4.83Z" />
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-yellow-400/90 drop-shadow-sm"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.173L12 18.897l-7.336 3.873 1.402-8.173L.132 9.211l8.2-1.193L12 .587z" />
        </svg>
      ))}
    </div>
  );
}

function Pager({ total, index, onDot }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDot(i)}
          className={[
            "h-2.5 w-2.5 rounded-full transition",
            i === index
              ? "bg-neutral-900 dark:bg-neutral-100 scale-110"
              : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600",
          ].join(" ")}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      ))}
    </div>
  );
}
