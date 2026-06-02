import React from "react";
import shadow from "../../assets/bg-shadow.png";
import Cricket from "../../assets/banner-main.png";

const Banner = () => {

    return (
        <div className="max-w-7xl mx-auto lg:px-17 px-4">
            <div
                className="
          flex items-center justify-center
          bg-gray-900 relative overflow-hidden
          rounded-2xl sm:rounded-3xl
          py-10 sm:py-16 lg:py-20
          px-4
        "
            >
                {/* Background */}
                <img
                    src={shadow}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background Shadow"
                />

                {/* Content */}
                <div className="relative z-10 text-center text-white">
                    <img
                        src={Cricket}
                        className="mx-auto mb-4 w-32 sm:w-44 md:w-56 lg:w-auto max-w-full"
                        alt="Cricket"
                    />

                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h2>

                    <p className="mt-3 text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-300">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button
                        className="
              mt-6
              btn
              bg-[#E7FE29]
              border-0
              text-black
              rounded-xl
              hover:bg-[#d4e924]
              transition-colors
            "
                    >
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;