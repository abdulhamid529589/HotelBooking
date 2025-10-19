import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  const [form, setForm] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!form.destination || !form.checkIn || !form.checkOut) {
      alert("Please fill in all fields!");
      return;
    }

    alert(
      `Searching hotels in ${form.destination} for ${form.guests} guest(s)\nFrom: ${form.checkIn} To: ${form.checkOut}`
    );
  };

  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen text-white 
                 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/Images/heroImage.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center text-center">
        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[4px] text-gray-200 mb-3">
            The Ultimate Hotel Experience
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Discover Your Perfect Getaway
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Luxurious comfort and timeless elegance await at the world’s most
            exclusive hotels.
          </p>
        </motion.div>

        {/* Animated Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative bg-white/90 backdrop-blur-md text-gray-800 rounded-2xl shadow-lg
                     w-full max-w-4xl p-4 sm:p-6 flex flex-col sm:flex-wrap md:flex-row
                     gap-3 md:gap-4 justify-between items-stretch"
        >
          {/* Destination */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-xs font-semibold text-gray-600 mb-1 flex items-center gap-2">
              <img
                src={assets.locationIcon}
                alt="Destination"
                className="w-4 h-4 opacity-70"
              />
              Destination
            </label>
            <input
              list="destinations"
              id="destination"
              value={form.destination}
              onChange={handleChange}
              type="text"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 
                         focus:ring-black/80 outline-none transition-all duration-200 hover:shadow-md"
              placeholder="Where to?"
              required
            />
            <datalist id="destinations">
              {cities.map((city, i) => (
                <option key={i} value={city} />
              ))}
            </datalist>
          </div>

          {/* Check-in */}
          <div className="flex flex-col min-w-[130px]">
            <label className="text-xs font-semibold text-gray-600 mb-1 flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="Check-in"
                className="w-4 h-4 opacity-70"
              />
              Check-in
            </label>
            <input
              type="date"
              id="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 
                         focus:ring-black/80 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col min-w-[130px]">
            <label className="text-xs font-semibold text-gray-600 mb-1 flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt="Check-out"
                className="w-4 h-4 opacity-70"
              />
              Check-out
            </label>
            <input
              type="date"
              id="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 
                         focus:ring-black/80 outline-none transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col min-w-[90px] max-w-[100px]">
            <label className="text-xs font-semibold text-gray-600 mb-1">
              Guests
            </label>
            <input
              id="guests"
              type="number"
              value={form.guests}
              onChange={handleChange}
              min={1}
              max={10}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 
                         focus:ring-black/80 outline-none transition-all duration-200 hover:shadow-md"
              placeholder="2"
            />
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-black text-white font-medium
                       px-6 py-2.5 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-200
                       w-full sm:w-auto mt-2 sm:mt-5 md:mt-0"
          >
            <img src={assets.searchIcon} alt="Search" className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Hero;
