import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ExclusiveOffers = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button
          onClick={() => navigate("/offers")}
          className="flex items-center gap-2 text-sm sm:text-base font-semibold text-black border border-gray-300 px-6 py-2.5 
                     rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
        >
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative group h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />

            {/* Discount Badge */}
            <p className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {item.priceOff}% OFF
            </p>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
              <h3 className="text-lg font-playfair font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 mb-2">{item.description}</p>
              <p className="text-xs text-gray-300 mb-4">
                Expires {item.expiryDate}
              </p>

              <button
                onClick={() => navigate(`/offers/${item._id}`)}
                className="flex items-center gap-2 text-sm font-medium bg-white text-black px-4 py-2 rounded-full 
                           hover:bg-black hover:text-white transition-all duration-300"
              >
                View Offer
                <img
                  src={assets.arrowIcon}
                  alt="arrow"
                  className="w-4 h-4 invert group-hover:invert-0 transition-all"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveOffers;
