import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  roomsDummyData,
  facilityIcons,
  assets,
  cities,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
const priceRanges = ["0-200", "201-400", "401-600", "601+"];

const AllRooms = () => {
  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredRooms = roomsDummyData.filter((room) => {
    const cityMatch = selectedCity ? room.hotel.city === selectedCity : true;
    const amenitiesMatch =
      selectedAmenities.length > 0
        ? selectedAmenities.every((a) => room.amenities.includes(a))
        : true;
    const roomTypeMatch = selectedRoomType
      ? room.roomType === selectedRoomType
      : true;
    const priceMatch = selectedPrice
      ? (() => {
          const [min, max] = selectedPrice.split("-").map(Number);
          return room.pricePerNight >= min && room.pricePerNight <= max;
        })()
      : true;
    const availabilityMatch =
      selectedAvailability
        ? selectedAvailability === "Available"
          ? room.isAvailable
          : !room.isAvailable
        : true;

    return cityMatch && amenitiesMatch && roomTypeMatch && priceMatch && availabilityMatch;
  });

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const clearFilters = () => {
    setSelectedCity("");
    setSelectedAmenities([]);
    setSelectedRoomType("");
    setSelectedPrice("");
    setSelectedAvailability("");
  };

  return (
    <div className="pt-28 md:pt-32 px-4 md:px-10 lg:px-20 mb-10 flex flex-col lg:flex-row gap-6 relative">
      {/* Mobile Filter Panel */}
      <div className="lg:hidden fixed top-20 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300"
           style={{transform: mobileFilterOpen ? "translateY(0%)" : "translateY(-110%)"}}>
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="text-gray-700 font-bold"
          >
            X
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {/* City */}
          <div>
            <p className="font-medium mb-2">City</p>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">All Cities</option>
              {cities.map((city, i) => (
                <option key={i} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          {/* Room Type */}
          <div>
            <p className="font-medium mb-2">Room Type</p>
            <select
              value={selectedRoomType}
              onChange={(e) => setSelectedRoomType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">All Types</option>
              {roomTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {/* Price */}
          <div>
            <p className="font-medium mb-2">Price Range</p>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">All Prices</option>
              {priceRanges.map((range, i) => (
                <option key={i} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
          {/* Availability */}
          <div>
            <p className="font-medium mb-2">Availability</p>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Any</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>
          {/* Amenities */}
          <div>
            <p className="font-medium mb-2">Amenities</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(facilityIcons).map((amenity, i) => (
                <button
                  key={i}
                  onClick={() => toggleAmenity(amenity)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md border text-sm ${
                    selectedAmenities.includes(amenity)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <img src={facilityIcons[amenity]} alt={amenity} className="h-5 w-5" />
                  {amenity}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={clearFilters}
            className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Rooms</h2>
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium"
        >
          Filters
        </button>
      </div>

      {/* Sidebar Filters for Desktop */}
      <aside className="hidden lg:flex flex-col w-1/4 bg-white rounded-xl shadow-md p-5 sticky top-32 h-max gap-4">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>

        {/* City */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">All Cities</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Room Type */}
        <select
          value={selectedRoomType}
          onChange={(e) => setSelectedRoomType(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">All Types</option>
          {roomTypes.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Price */}
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">All Prices</option>
          {priceRanges.map((range, i) => (
            <option key={i} value={range}>
              {range}
            </option>
          ))}
        </select>

        {/* Availability */}
        <select
          value={selectedAvailability}
          onChange={(e) => setSelectedAvailability(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">Any</option>
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.keys(facilityIcons).map((amenity, i) => (
            <button
              key={i}
              onClick={() => toggleAmenity(amenity)}
              className={`flex items-center gap-2 px-3 py-1 rounded-md border text-sm ${
                selectedAmenities.includes(amenity)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <img src={facilityIcons[amenity]} alt={amenity} className="h-5 w-5" />
              {amenity}
            </button>
          ))}
        </div>

        <button
          onClick={clearFilters}
          className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          Clear All Filters
        </button>
      </aside>

      {/* Rooms Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No rooms found with selected filters.
          </p>
        )}

        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all flex flex-col"
            onClick={() => {
              navigate(`/rooms/${room._id}`);
              window.scrollTo(0, 0);
            }}
          >
            {/* Room Image */}
            <div className="relative">
              <img
                src={room.images[0]}
                alt={room.hotel.name}
                className="w-full h-56 object-cover"
              />
              <span
                className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs text-white ${
                  room.isAvailable ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {room.isAvailable ? "Available" : "Booked"}
              </span>
            </div>

            {/* Room Info */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="text-gray-500 text-sm">{room.hotel.city}</p>
              <h3 className="text-lg font-semibold">{room.hotel.name}</h3>
              <div className="flex items-center gap-2">
                <StarRating />
                <span className="text-sm text-gray-500">200+ reviews</span>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <img src={assets.locationIcon} alt="location" className="h-4 w-4" />
                {room.hotel.address}
              </p>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mt-2">
                {room.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-gray-600 text-xs border border-gray-200 px-2 py-1 rounded-full"
                  >
                    <img src={facilityIcons[amenity]} alt={amenity} className="h-4 w-4" />
                    {amenity}
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className="text-blue-600 font-semibold mt-2 text-lg">
                ${room.pricePerNight} / night
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AllRooms;
