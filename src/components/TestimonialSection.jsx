import { useRef, useState } from "react";

// images (replace with yours)
const BG_IMG = "/src/assets/testimonials-bg.jpg";
const DATA = [
  {
    quote:
      "There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "John Williamson",
    city: "Newyork City",
    avatar: "/src/assets/avatar-john.jpg",
  },
  {
    quote:
      "Typesetting has evolved, but great service hasn’t. SmartRepair Pro delivered beyond expectations—fast, friendly, and reliable. I’d recommend them in a heartbeat!",
    name: "Sara Thompson",
    city: "Los Angeles",
    avatar: "/src/assets/avatar-sara.jpg",
  },
  {
    quote:
      "From booking to delivery, everything was smooth. The team communicated clearly and the result was flawless. Five stars from me.",
    name: "Liam Carter",
    city: "Chicago",
    avatar: "/src/assets/avatar-liam.jpg",
  },
];

export default function TestimonialSection() {
  const [i, setI] = useState(0);
  const [dragX, setDragX] = useState(0);
  const touchStartX = useRef(null);
  const touchActive = useRef(false);

  const next = () => setI((p) => (p + 1) % DATA.length);
  const prev = () => setI((p) => (p - 1 + DATA.length) % DATA.length);

  // touch handlers (mobile)
  const onTouchStart = (e) => {
    touchActive.current = true;
    touchStartX.current = e.touches[0].clientX;
    setDragX(0);
  };
  const onTouchMove = (e) => {
    if (!touchActive.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    setDragX(dx);
  };
  const onTouchEnd = () => {
    touchActive.current = false;
    const threshold = 60; // swipe distance to trigger
    if (dragX <= -threshold) next();
    else if (dragX >= threshold) prev();
    setDragX(0);
  };

  const item = DATA[i];

  return (
    <section aria-labelledby="testimonials-title">
      {/* background in normal flow */}
      <div
        className="relative w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${BG_IMG})` }}
      >
        {/* red overlay */}
        <div className="absolute inset-0 bg-[#e53935]/90" />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 text-center text-white">
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            What People Are Saying
          </h2>

          <div className="mt-3 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-white/80" />
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base leading-6 sm:leading-7 text-white/90">
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>

          {/* slider area */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20">
            {/* desktop arrows */}
            <button
              onClick={prev}
              className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded bg-white text-black shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded bg-white text-black shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Next"
            >
              ›
            </button>

            {/* visible slide (touch-enabled on mobile) */}
            <div
              className="mx-auto max-w-5xl rounded-lg bg-white px-4 py-10 shadow-md sm:px-8 md:px-12 lg:px-16 overflow-hidden"
              style={{ minHeight: 380 }} // gentle floor to stop jump
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* drag translate hint on mobile */}
              <div
                className="transition-transform duration-200 will-change-transform"
                style={{
                  transform:
                    dragX !== 0
                      ? `translateX(${Math.max(Math.min(dragX, 80), -80)}px)`
                      : "translateX(0)",
                }}
              >
                {/* avatar + badge fully inside card */}
                <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                  <img
                    src={item.avatar}
                    className="h-20 w-20 rounded-full border-[6px] border-white shadow-md object-cover"
                    alt={item.name}
                  />
                  <span className="absolute -bottom-2 -right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e53935] text-white text-xl font-bold">
                    ”
                  </span>
                </div>

                <blockquote className="mx-auto max-w-4xl text-gray-800">
                  <p className="text-base sm:text-lg md:text-xl italic leading-7 sm:leading-8 md:leading-9">
                    {item.quote}
                  </p>
                </blockquote>

                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-[#e53935] italic">
                    {item.city}
                  </p>
                </div>
              </div>
            </div>

            {/* mobile arrows + dots */}
            <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
              <button
                onClick={prev}
                className="h-11 w-11 rounded bg-white text-black shadow hover:bg-gray-100"
                aria-label="Previous"
              >
                ‹
              </button>
              <div className="flex items-center gap-2">
                {DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === idx ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-11 w-11 rounded bg-white text-black shadow hover:bg-gray-100"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
