import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCar, FaLightbulb, FaHammer, FaCog, FaFileAlt } from "react-icons/fa";

const SERVICES = [
  {
    id: "scratches",
    title: "Scratches & Scuffs",
    desc: "Remove unsightly scratches and scuffs from your vehicle's paintwork",
    icon: FaCar,
    img: "/images/services/scratches.jpg", // replace with your real path
    alt: "Scratches & Scuffs before",
  },
  {
    id: "headlights",
    title: "Head Light Restoration",
    desc: "Bring back crystal clear visibility with professional headlight restoration",
    icon: FaLightbulb,
    img: "/images/services/headlight.jpg",
    alt: "Head Light Restoration before",
  },
  {
    id: "dent",
    title: "Dent Removal",
    desc: "Expert dent removal without affecting your vehicle's original paint",
    icon: FaHammer,
    img: "/images/services/dent.jpg",
    alt: "Dent Removal before",
  },
  {
    id: "wheels",
    title: "Wheels & Calipers",
    desc: "Restore wheels and brake calipers to showroom condition",
    icon: FaCog,
    img: "/images/services/wheels.jpg",
    alt: "Wheels & Calipers before",
  },
  {
    id: "lease",
    title: "Lease Returns",
    desc: "Avoid expensive lease return charges with our comprehensive repair service",
    icon: FaFileAlt,
    img: "/images/services/lease.jpg",
    alt: "Lease Returns before",
  },
];

export default function ServicesGrid({ onView = () => {} }) {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Our Expert Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Click on any service to see amazing before and after transformations
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ id, title, desc, icon: Icon, img, alt }) => (
            <article
              key={id}
              className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => onView(id)}
            >
              {/* Header */}
              <header className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Icon className="text-black" />
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
              </header>

              <p className="text-gray-500">{desc}</p>

              {/* Image with badge */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={img || "/placeholder.svg?height=300&width=400"}
                  alt={alt}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-2 top-2 inline-flex w-fit items-center justify-center rounded-md bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                  Before
                </span>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onView(id);
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/10"
              >
                View Before & After
                <FiArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
