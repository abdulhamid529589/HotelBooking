import React from "react";

const Title = ({ title, subTitle, align = "center", font }) => {
  const isLeftAligned = align === "left";

  return (
    <div
      className={`flex flex-col ${
        isLeftAligned ? "items-start text-left" : "items-center text-center"
      } transition-all duration-500`}
    >
      {/* Main Title */}
      <h1
        className={`text-3xl sm:text-4xl md:text-[40px] font-semibold text-gray-900 
                    ${font || "font-playfair"} leading-tight`}
      >
        {title}
      </h1>

      {/* Sub Title */}
      {subTitle && (
        <p
          className={`text-sm sm:text-base text-gray-500/90 mt-3 ${
            isLeftAligned ? "max-w-xl" : "max-w-2xl"
          }`}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
