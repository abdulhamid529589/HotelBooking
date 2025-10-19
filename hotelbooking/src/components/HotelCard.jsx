import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <div
      key={room.id}
      className="relative group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl 
                 transition-all duration-500 w-full max-w-sm cursor-pointer"
    >
      {/* Image Section */}
      <Link
        to={`/rooms/${room.id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative block"
      >
        <img
          src={room.images?.[0] || assets.placeholderImage}
          alt={room.hotel?.name || "Hotel"}
          className="h-56 w-full object-cover transform group-hover:scale-110 
                     transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        {/* Image Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-500"
        ></div>

        {/* Badge */}
        {index % 2 === 0 && (
          <span
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 
                           text-xs font-semibold px-3 py-1.5 rounded-full shadow-md"
          >
            ⭐ Best Seller
          </span>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-2">
        {/* Hotel Name + Rating */}
        <div className="flex items-center justify-between">
          <h3 className="font-playfair text-lg font-semibold text-gray-900 truncate">
            {room.hotel?.name || "Hotel Name"}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <img
              src={assets.starIconFilled}
              alt="rating"
              className="w-4 h-4 drop-shadow-sm"
            />
            <span className="text-sm text-gray-700 font-medium">4.5</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500 truncate">
          <img
            src={assets.locationIcon}
            alt="location icon"
            className="w-3.5 h-3.5 opacity-70"
          />
          <span>{room.hotel?.address || "Unknown"}</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-700 text-sm sm:text-base">
            <span className="text-xl font-bold text-black">
              ${room.pricePerNight}
            </span>{" "}
            <span className="text-gray-500 font-normal">/night</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative px-5 py-2 text-sm font-semibold rounded-lg border border-gray-300 
                       text-gray-800 overflow-hidden group-hover:bg-black group-hover:text-white 
                       transition-all duration-300"
          >
            <span className="relative z-10">Book Now</span>
            <span
              className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 
                             origin-left transition-transform duration-300 rounded-lg"
            />
          </button>
        </div>
      </div>

      {/* Subtle border-glow hover effect */}
      <div
        className="absolute inset-0 border border-transparent group-hover:border-black/10 
                      rounded-2xl transition-all duration-500"
      />
    </div>
  );
};

export default HotelCard;
