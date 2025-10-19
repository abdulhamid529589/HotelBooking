import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureDestination = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-50 overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          title="Featured Destinations"
          subTitle="Explore some of the most popular stays handpicked just for you. From urban escapes to tropical getaways, find your perfect match."
          align="center"
        />
      </motion.div>

      {/* Hotel Grid with staggered animations */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <motion.div
            key={room._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <HotelCard room={room} index={index} />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => {
            navigate("/rooms");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-8 py-3 text-sm font-semibold text-white bg-black rounded-full 
                     shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                     transition-all duration-300"
        >
          View All Destinations
        </button>
      </motion.div>
    </section>
  );
};

export default FeatureDestination;
