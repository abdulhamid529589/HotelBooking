import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Light background detection for /rooms page
  const isLightBgPage = location.pathname === "/rooms";

  // Dynamic styles
  const navBg =
    isScrolled || isLightBgPage ? "bg-white shadow-md" : "bg-transparent";
  const navText = isScrolled || isLightBgPage ? "text-gray-800" : "text-white";
  const buttonBg =
    isScrolled || isLightBgPage
      ? "bg-blue-600 text-white"
      : "bg-white text-blue-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${navBg} py-4 md:py-5`}
    >
      <div className="flex justify-between items-center px-5 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className={`h-9 transition-all duration-300 ${
              navBg === "bg-white shadow-md" ? "invert opacity-90" : ""
            }`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`group flex flex-col gap-0.5 transition-all duration-300 ${
                location.pathname === link.path
                  ? "font-semibold"
                  : "font-medium"
              } ${navText}`}
            >
              {link.name}
              <span
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  navBg === "bg-white shadow-md" ? "bg-blue-600" : "bg-white"
                }`}
              />
            </Link>
          ))}

          {isSignedIn && (
            <button
              onClick={() => navigate("/owner")}
              className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all duration-300 ${
                navBg === "bg-white shadow-md"
                  ? "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-blue-600"
              }`}
            >
              Dashboard
            </button>
          )}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src={assets.searchIcon}
            alt="search"
            className={`h-6 md:h-7 cursor-pointer transition-all duration-500 ${
              navBg === "bg-white shadow-md" ? "invert" : ""
            }`}
            onClick={() => navigate("/rooms")}
          />

          {isSignedIn ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIcon />}
                  onClick={() => navigate("my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={() => openSignIn({})}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${buttonBg} hover:opacity-90`}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={assets.menuIcon}
            alt="menu"
            className={`h-6 cursor-pointer ${
              navBg === "bg-white shadow-md" ? "invert" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-gray-800 flex flex-col items-center justify-center gap-6 font-medium transition-transform duration-500 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close" className="h-6" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-blue-600 transition"
          >
            {link.name}
          </Link>
        ))}

        {isSignedIn && (
          <button
            onClick={() => {
              navigate("/owner");
              setIsMenuOpen(false);
            }}
            className="border px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Dashboard
          </button>
        )}

        {!isSignedIn && (
          <button
            onClick={() => {
              openSignIn();
              setIsMenuOpen(false);
            }}
            className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
