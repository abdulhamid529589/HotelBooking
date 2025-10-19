import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  roomsDummyData,
  assets,
  facilityIcons,
  roomCommonData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomsDummyData.find((r) => r._id === id) || roomsDummyData[0];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-[500px] overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center px-6 md:px-20 text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            {room.hotel.name}
          </h1>
          <p className="mt-3 text-sm md:text-lg opacity-90">
            {room.hotel.city}, {room.hotel.address}
          </p>
          {room.isAvailable && (
            <span className="mt-3 w-fit px-4 py-1 bg-green-600 rounded-full text-sm font-semibold">
              Available Now
            </span>
          )}
        </div>
      </div>

      {/* Room Details Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Title + Reviews */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {room.hotel.name} ({room.roomType})
            </h2>
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-gray-500 text-sm">200+ reviews</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 text-xl font-semibold text-blue-600">
            ${room.pricePerNight}
            <span className="text-gray-500 text-sm font-normal">/ night</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            Experience Luxury Like Never Before. Guests will be allocated on the
            ground floor according to availability. You get a comfortable
            two-bedroom apartment that has a true city feeling. The price quoted
            is for two guests. Exact location is provided after booking.
          </p>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Amenities
            </h3>
            <div className="flex flex-wrap gap-3">
              {room.amenities.map((amenity, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-gray-700 text-sm bg-white shadow-sm"
                >
                  <img
                    src={facilityIcons[amenity]}
                    alt={amenity}
                    className="h-5 w-5"
                  />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roomCommonData.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Location
            </h3>
            <p className="text-gray-700">
              {room.hotel.city}, {room.hotel.address}
            </p>
            <div className="mt-3 w-full h-60 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              🗺️ Map Placeholder
            </div>
          </div>

          {/* Host */}
          <div className="mt-8 p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={room.hotel.owner.image}
              alt={room.hotel.owner.username}
              className="h-16 w-16 rounded-full object-cover shadow-md"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                Hosted by {room.hotel.owner.username}
              </h4>
              <p className="text-gray-500 text-sm">
                200+ reviews • Response rate: 100% • Response time: 30 min
              </p>
            </div>
            <button className="mt-2 sm:mt-0 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Contact Now
            </button>
          </div>
        </div>

        {/* Right Column: Booking Box */}
        <div className="bg-white p-6 rounded-2xl shadow-md sticky top-24">
          <h3 className="font-semibold text-lg mb-4 text-gray-900">
            Check Availability
          </h3>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-600 text-sm">Check-In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Check-Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">Guests</label>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
