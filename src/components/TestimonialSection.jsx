import { useRef, useState } from "react";

// images (replace with yours)
const BG_IMG = "/src/assets/testimonials-bg.jpg";
const DATA = [
  {
    quote: `Great service with excellent customer care - the price was very reasonable and great value for money. I have an unusual coloured car, so in advance Shane paint matched my car colour — it was a perfect match & spot on. I then had a small dent removal and respray on part of my car. Shane also sorted a couple of extra little old scuffs & door opening chips (from previous ownership) and even put right a small scuff mark on the wheel trim for free when I picked the car up. Thanks Shane for going above and beyond and doing a great job — a trustworthy tradesman who really cares about customers. I would definitely recommend and use again!`,
    name: "Lou Nad",
    city: "United Kingdom",
    avatar: "Lou Nad.png",
  },
  {
    quote: `I used SL Smart Repairs today for the first time following a recommendation. Shane was approachable and honest. There was minor bodywork damage to the rear passenger wing of the car. Shane fixed it immediately on the spot and declined payment, as it was a minor job. Very refreshing to see such an honest work ethic today.`,
    name: "Vince K",
    city: "United Kingdom",
    avatar: "Vince K.png",
  },
  {
    quote: `Have had to use S L Smart Repair twice this year due to malicious damage and a vehicle driving down the side of my car causing damage to the door, back wing and alloy — and what a fantastic job from S L Smart Repair. Fast and efficient services provided; we regularly use them as a valet. Would highly recommend.`,
    name: "Katie Holman",
    city: "United Kingdom",
    avatar: "Katie Holman.png",
  },
  {
    quote: `We have used Shane numerous times now and always been so happy with all of the jobs he’s done for us. Our car went to the garage for a parking sensor fault and ended up being damaged in the process — we knew exactly who we wanted to put it right. Shane worked his magic, putting it back to even better than it was before. He is very professional, competitively priced (you get what you pay for with body work), and his setup lets him work in all weathers. Don’t shop around — just book in with Shane if you care about your car and want a proper professional job. I’ll never go anywhere else — the best around in my opinion. ❤️`,
    name: "Chloe Lee-Shield",
    city: "United Kingdom",
    avatar: "Chloe Lee-Shield.png",
  },
  {
    quote: `I had some damage to my front bumper and wing. Shane booked me in and managed to fix the paint then and there. Seriously impressive! He’s very knowledgeable and a true professional. Would definitely recommend to anyone looking for a repair to their vehicle. Thanks again.`,
    name: "Max Souter",
    city: "United Kingdom",
    avatar: "Max Souter.png",
  },
  {
    quote: `Booked my wife’s Toyota Yaris in with Shane for a rear bumper scuff. Shane is really easy to deal with and a skilled, experienced professional. Fair price and honest advice. Pleased with the quality of work — spot-on paint finish and colour match, and same-day service. Would highly recommend Shane.`,
    name: "Ajay Chauhan",
    city: "United Kingdom",
    avatar: "Ajay Chauhan.png",
  },
  {
    quote: `Bought a car at auction with some scrapes and scratches and thanks to Shane at SL Smart Repairs, the car looks new. Much better value than a bodywork shop. Booked in to take another car next month.`,
    name: "Jonathan Cameron",
    city: "United Kingdom",
    avatar: "Jonathan Cameron.png",
  },
  {
    quote: `I would recommend anyone to use SL smart repairs. I had a scuff on my pride and joy so I contacted Shane, sent a picture of the damage and was booked in promptly for the following week.
Superb work you cannot tell my bumper has been repaired and fast turnaround also. I will certainly use again.
Shane knows what he is doing, offers good advice and is a nice guy to deal with top service. Thanks SL smart repairs!`,
    name: "TM",
    city: "United Kingdom",
    avatar: "TM.png",
  },
  {
    quote: `I was looking for someone to repair the damage to my bumper and came across SL Repairs in Wigston, a short drive away. Shane was very knowledgeable and courteous and had my car repaired at a VERY reasonable price! Thank you for your hard work!`,
    name: "James",
    city: "United Kingdom",
    avatar: "James.png",
  },
  {
    quote: `Brilliant job on my Alfa Giulia, despite an unusual shade of white. Also touched up some minor blemishes that I hadn’t even noticed.

Will definitely be back to sort out some other paint issues caused by a previous owner.

Would highly recommend.`,
    name: "Alistair Singer",
    city: "United Kingdom",
    avatar: "Alistair Singer.png",
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
    const threshold = 60;
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

          {/* slider area (adds side gutter on md+ so arrows can sit outside) */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20 md:px-12 lg:px-16">
            {/* desktop/tablet arrows — pushed OUTSIDE on md+ */}
            <button
              onClick={prev}
              className="hidden sm:flex absolute left-4 sm:left-8 md:-left-10 lg:-left-12 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded bg-white text-black shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="hidden sm:flex absolute right-4 sm:right-8 md:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded bg-white text-black shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Next"
            >
              ›
            </button>

            {/* visible slide (touch-enabled on mobile) */}
            <div
              className="mx-auto max-w-5xl rounded-lg bg-white px-4 py-10 shadow-md sm:px-8 md:px-12 lg:px-16 overflow-hidden"
              style={{ minHeight: 380 }}
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
