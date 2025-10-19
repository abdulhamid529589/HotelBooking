import React from "react";
import Title from "./Title";
import { testimonials, assets } from "../assets/assets";
import StarRating from "./StarRating";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-50 overflow-hidden">
      {/* Section Title */}
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
        align="center"
      />

      {/* Testimonials Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
          >
            {/* Decorative Quote Icon */}
            <img
              src={assets.starIconOutlined}
              alt="quote"
              className="absolute top-6 right-6 w-6 h-6 opacity-20"
            />

            {/* User Info */}
            <div className="flex items-center gap-4 mb-5">
              <img
                className="w-14 h-14 rounded-full object-cover shadow-md border border-gray-100"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Review Text */}
            <p className="text-gray-600 italic leading-relaxed">
              “{testimonial.review}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
