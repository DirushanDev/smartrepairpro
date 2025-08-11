import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + Brand */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="SmartRepair Pro"
            className="h-7 w-auto sm:h-8"
          />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-black">
            SmartRepair Pro
          </span>
        </a>

        {/* Center: Nav (desktop only) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-lg text-gray-500 lg:flex">
          <li>
            <a href="#services" className="hover:text-black transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: CTA + Hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <a
            href="#quote"
            className="hidden md:inline-block rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Get Quote
          </a>

          {/* Hamburger (no SVGs) */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-12 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute block h-0.5 w-7 bg-black transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-7 bg-black transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-7 bg-black transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${open ? "block" : "hidden"} lg:hidden border-b border-gray-200`}>
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#quote"
            className="mt-3 inline-block w-full rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
