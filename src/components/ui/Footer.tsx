import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 lg:mt-20">
      <section className="app-container">
        <motion.div
          className="rounded-3xl border border-secondary-dark/70 bg-white px-5 sm:px-8 lg:px-12 py-10 lg:py-12 shadow-xl shadow-black/10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-primary">
                  Affiliate Opportunity
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] text-tetiary">
                Start your wellness business, gently.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-soft max-w-xl">
                Join a growing community of affiliate business owners, earn
                competitive margins, and get partner support, while helping more
                people stay consistent with daily wellness.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://www.affluenceglobaldream.com/en/barmytee_83/ng/agl/ref-member/LEFT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md shadow-black/10 hover:brightness-110 transition"
                  >
                    Join as an Affiliate
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/become-an-affiliate"
                    className="inline-flex items-center justify-center rounded-full border border-secondary-dark/70 bg-white px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1000+", label: "Active Partners" },
                { value: "15+", label: "Countries Served" },
                { value: "95%", label: "Customer Satisfaction" },
                { value: "24/7", label: "Support System" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  className="rounded-2xl border border-secondary-dark/70 bg-white p-5 shadow-sm hover:shadow-md transition"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-primary font-display text-2xl sm:text-3xl font-extrabold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-neutral-soft">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-10 border-t border-secondary-dark/70 bg-white">
        <div className="app-container py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-semibold text-neutral-soft">
            © {year} RedRose by Telee. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold tracking-widest uppercase text-neutral-soft">
            <a
              href="https://zenithdevtech.name.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tetiary transition"
            >
              Built by Zenith Dev™
            </a>

            <Link to="/contact" className="hover:text-tetiary transition">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
