import React from "react";

const CallToAction = ({
  phone = "(555) 123-4567",
  telHref = "tel:5551234567",
}) => {
  return (
    <section className="w-full bg-[#171717] text-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 text-center">
        <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">
          Ready to Restore Your Vehicle?
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-base sm:text-xl text-white/80">
          Get a free quote today and see the SmartRepair Pro difference
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Filled button */}
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-lg font-semibold text-black shadow-sm hover:opacity-90"
          >
            Get Free Quote
          </a>

          {/* Outlined button */}
          <a
            href={telHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/80 px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Call Now: {phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
