import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-10 font-sans">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-pink-500 to-amber-400 bg-[length:200%_200%] animate-gradientMove"></div>

      {/* Subtle frosted overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-wrap justify-between gap-12 md:gap-8">
        {/* Brand Section */}
        <div className="max-w-sm">
          <img
            src={assets.logo}
            alt="QuickStay Logo"
            className="mb-5 h-9 drop-shadow-lg"
          />
          <p className="text-sm leading-relaxed text-white/90">
            Discover handpicked luxury stays and unforgettable experiences —
            from hidden gems to world-class resorts, all in one place.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            {[
              { icon: assets.instagramIcon, link: "https://instagram.com" },
              { icon: assets.facebookIcon, link: "https://facebook.com" },
              { icon: assets.twitterIcon, link: "https://twitter.com" },
              { icon: assets.linkendinIcon, link: "https://linkedin.com" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-md"
              >
                <img
                  src={item.icon}
                  alt="social icon"
                  className="w-6 h-6 invert bg-black rounded"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/90">
            {[
              { name: "About", link: "/about" },
              { name: "Careers", link: "/careers" },
              { name: "Press", link: "/press" },
              { name: "Blog", link: "/blog" },
              { name: "Partners", link: "/partners" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-amber-300 transition-all duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/90">
            {[
              { name: "Help Center", link: "/help" },
              { name: "Safety Information", link: "/safety" },
              { name: "Cancellation Options", link: "/cancellation" },
              { name: "Contact Us", link: "/contact" },
              { name: "Accessibility", link: "/accessibility" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-amber-300 transition-all duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-sm text-white/90 mb-4">
            Subscribe for exclusive deals, curated travel inspiration, and early
            access to new destinations.
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-white/15 text-white placeholder:text-white/70 border border-white/30 rounded-l-lg focus:ring-2 focus:ring-amber-300 outline-none transition-all"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-black h-10 w-10 rounded-r-lg transition-all active:scale-95"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/20 mt-12" />

      {/* Bottom Bar */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-sm text-white/80">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="/"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            QuickStay
          </a>{" "}
          — All Rights Reserved.
        </p>

        <ul className="flex items-center gap-5">
          {[
            { name: "Privacy", link: "/privacy" },
            { name: "Terms", link: "/terms" },
            { name: "Sitemap", link: "/sitemap" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-amber-300 transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradientMove {
          animation: gradientMove 12s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
