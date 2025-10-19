import React, { useState } from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address ✉️");
      return;
    }
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-20 md:py-24">
      {/* Glassy newsletter card */}
      <div
        className="relative w-full max-w-4xl text-center px-6 py-12 md:py-16 rounded-3xl 
                    backdrop-blur-xl bg-white/10 border border-gray-200/30 shadow-lg"
      >
        {/* Section Title */}
        <Title
          align="center"
          title="Stay Inspired ✨"
          subTitle="Join our newsletter and be the first to explore hidden destinations, luxury stays, and exclusive offers tailored for you."
        />

        {/* Input + Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 
                       placeholder:text-gray-400 focus:ring-2 focus:ring-gray-500 outline-none 
                       transition-all duration-300"
          />

          <button
            onClick={handleSubscribe}
            className={`flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 
                        transition-all duration-300 ${
                          submitted
                            ? "bg-green-500 text-white"
                            : "bg-gray-900 text-white hover:bg-black active:scale-95"
                        }`}
          >
            {submitted ? (
              <span>Subscribed 🎉</span>
            ) : (
              <>
                <span>Subscribe</span>
                <img
                  src={assets.arrowIcon}
                  alt="arrow"
                  className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>
        </div>

        {/* Subtext */}
        <p className="text-gray-500 text-xs mt-8">
          By subscribing, you agree to our{" "}
          <span className="underline cursor-pointer hover:text-gray-700">
            Privacy Policy
          </span>{" "}
          and consent to receive travel inspiration & exclusive offers.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
