// ServicesWithModal.jsx
import React, { useState, Fragment } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";
import { FaCar, FaLightbulb, FaHammer, FaCog, FaFileAlt } from "react-icons/fa";

const SERVICES = [
  {
    id: "scratches",
    title: "Scratches & Scuffs",
    icon: FaCar,
    blurb:
      "Professional scratch and scuff repair that restores your vehicle's original finish",
    beforeImg: "/images/services/scratches-before.jpg",
    afterImg:  "/images/services/scratches-after.jpg",
    about:
      "Our advanced scratch repair techniques can handle everything from light surface scratches to deeper paint damage. We use color-matching technology and professional-grade compounds to restore your vehicle's finish to like-new condition.",
    steps: [
      "Assessment of damage depth and extent",
      "Surface preparation and cleaning",
      "Color matching and paint correction",
      "Polishing and protective coating application",
    ],
  },
  {
    id: "headlights",
    title: "Head Light Restoration",
    icon: FaLightbulb,
    blurb:
      "Restore cloudy, yellowed headlights to crystal clear condition for improved visibility",
    beforeImg: "/images/services/headlight-before.jpg",
    afterImg:  "/images/services/headlight-after.jpg",
    about:
      "Over time, headlights become cloudy and yellowed due to UV exposure and oxidation. Our restoration process removes the damaged outer layer and applies a protective coating to prevent future deterioration.",
    steps: [
      "Thorough cleaning and masking",
      "Progressive sanding to remove oxidation",
      "Polishing compound application",
      "UV protective coating for long-lasting clarity",
    ],
  },
  {
    id: "dent",
    title: "Dent Removal",
    icon: FaHammer,
    blurb:
      "Paintless dent repair that maintains your vehicle's original factory finish",
    beforeImg: "/images/services/dent-before.jpg",
    afterImg:  "/images/services/dent-after.jpg",
    about:
      "Our paintless dent repair (PDR) technique removes dents without the need for repainting. This method preserves your vehicle's original factory finish while being more cost-effective than traditional bodywork.",
    steps: [
      "Damage assessment and access planning",
      "Specialized tool positioning",
      "Gradual pressure application to restore shape",
      "Final inspection and quality check",
    ],
  },
  {
    id: "wheels",
    title: "Wheels & Calipers",
    icon: FaCog,
    blurb:
      "Complete wheel refurbishment and brake caliper restoration services",
    beforeImg: "/images/services/wheels-before.jpg",
    afterImg:  "/images/services/wheels-after.jpg",
    about:
      "We provide comprehensive wheel refurbishment including alloy wheel repair, powder coating, and brake caliper restoration. Our services handle curb damage, corrosion, and general wear to restore your wheels to perfect condition.",
    steps: [
      "Wheel removal and thorough inspection",
      "Damage repair and surface preparation",
      "Professional powder coating or painting",
      "Caliper cleaning and refinishing",
    ],
  },
  {
    id: "lease",
    title: "Lease Returns",
    icon: FaFileAlt,
    blurb:
      "Comprehensive pre-return inspection and repair to avoid costly penalties",
    beforeImg: "/images/services/lease-before.jpg",
    afterImg:  "/images/services/lease-after.jpg",
    about:
      "Returning a leased vehicle can result in expensive charges for wear and tear. Our lease return service addresses scratches, dents, wheel damage, and interior wear to help you avoid costly penalties.",
    steps: [
      "Pre-return vehicle inspection",
      "Identification of chargeable damage",
      "Cost-effective repair solutions",
      "Final quality assurance check",
    ],
  },
];

export default function ServicesWithModal() {
  const [active, setActive] = useState(null); // service object or null

  const openModal = (id) => setActive(SERVICES.find((s) => s.id === id) || null);
  const closeModal = () => setActive(null);

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
          {SERVICES.map(({ id, title, blurb, icon: Icon, beforeImg, alt }) => (
            <article
              key={id}
              className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => openModal(id)}
            >
              <header className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Icon className="text-black" />
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
              </header>

              <p className="text-gray-500">{blurb}</p>

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={beforeImg || "/placeholder.svg?height=300&width=400"}
                  alt={alt || `${title} before`}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute left-2 top-2 inline-flex w-fit items-center justify-center rounded-md bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                  Before
                </span>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                View Before & After
                <FiArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <Fragment>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={closeModal}
            aria-hidden="true"
          />
          {/* Dialog */}
          <div
            role="dialog"
            aria-modal="true"
            className="fixed left-1/2 top-1/2 z-50 grid max-h-[90vh] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-white p-6 shadow-lg"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100">
                  {active.icon ? <active.icon /> : null}
                </span>
                <h2 className="text-2xl font-semibold">{active.title}</h2>
              </div>
              <button
                onClick={closeModal}
                className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 overflow-y-auto">
              <p className="text-lg text-gray-500">{active.blurb}</p>

              {/* Before / After */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-red-600">Before</h3>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={active.beforeImg || "/placeholder.svg?height=300&width=400"}
                      alt={`${active.title} before repair`}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-600">After</h3>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={active.afterImg || "/placeholder.svg?height=300&width=400"}
                      alt={`${active.title} after repair`}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="rounded-lg bg-gray-100/70 p-6">
                <h3 className="mb-3 text-lg font-semibold">About This Service</h3>
                <p className="mb-4 text-gray-600">{active.about}</p>
                {active.steps?.length > 0 && (
                  <>
                    <h4 className="mb-2 font-semibold">Our Process:</h4>
                    <ul className="space-y-2">
                      {active.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 inline-flex min-w-6 justify-center rounded border px-2 text-xs font-medium">
                            {i + 1}
                          </span>
                          <span className="text-sm text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href="#quote"
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  Get Quote for This Service
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
}
