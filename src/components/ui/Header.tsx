import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import navitems from "../../lib/navitems";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className="bg-white/95 backdrop-blur-xl border-b border-secondary-dark/70"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <nav className="app-container h-16 sm:h-18 flex items-center gap-3">
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-secondary-dark/70 bg-white hover:bg-black/5 transition"
              aria-label="Open menu"
              whileTap={{ scale: 0.96 }}
            >
              <HiOutlineMenuAlt3 className="text-2xl text-primary" />
            </motion.button>

            <Link to="/" className="flex flex-col leading-tight">
              <span className="font-display text-base sm:text-lg font-extrabold text-tetiary">
                RedRose by Telee
              </span>
              <span className="text-[11px] sm:text-xs text-neutral-soft">
                Affiliate business owner of Affluence Global
              </span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative flex items-center gap-2 rounded-full border border-secondary-dark/70 bg-white px-2 py-1">
              {navitems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={[
                      "relative px-4 py-2 rounded-full text-sm font-semibold transition",
                      active
                        ? "text-primary"
                        : "text-neutral-dark hover:text-primary",
                    ].join(" ")}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-primary/10"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <a
                href="tel:+2348167949381"
                className="hidden lg:inline-flex items-center justify-center h-11 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-md shadow-black/10 hover:brightness-110 transition"
              >
                Call to Order
              </a>
            </motion.div>
          </div>

          <div className="md:hidden ml-auto w-10" aria-hidden="true" />
        </nav>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-70 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="px-4 pt-5 pb-4 border-b border-secondary-dark/70">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col leading-tight">
                    <span className="font-display text-lg font-extrabold text-tetiary">
                      RedRose by Telee
                    </span>
                    <span className="mt-1 text-[11px] text-neutral-soft">
                      Affiliate business owner of Affluence Global
                    </span>
                  </div>

                  <motion.button
                    onClick={() => setOpen(false)}
                    className="w-11 h-11 rounded-2xl border border-secondary-dark/70 bg-white hover:bg-black/5 transition flex items-center justify-center"
                    aria-label="Close menu"
                    whileTap={{ scale: 0.96 }}
                  >
                    <HiX className="text-2xl text-tetiary" />
                  </motion.button>
                </div>

                <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
              </div>

              <div className="px-4 py-6 flex flex-col gap-2">
                {navitems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={[
                        "px-4 py-3 rounded-2xl text-sm font-semibold transition border",
                        active
                          ? "bg-primary/5 text-primary border-primary/20"
                          : "text-neutral-dark border-secondary-dark/70 hover:bg-black/5",
                      ].join(" ")}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto p-4 border-t border-secondary-dark/70">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md shadow-black/10 hover:brightness-110 transition"
                >
                  Call to Order
                </Link>

                <a
                  href="https://wa.me/2348167949381?text=Hi%20there,%20I%E2%80%99d%20like%20to%20order%20Double%20Red%20Rose."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 w-full text-center rounded-2xl border border-secondary-dark/70 bg-white hover:bg-black/5 px-4 py-3 text-sm font-bold text-primary transition"
                >
                  WhatsApp Order
                </a>

                <p className="mt-3 text-[11px] text-neutral-soft text-center">
                  Fast response • Clear guidance • Easy ordering
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
