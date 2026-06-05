import React from "react";
import logo from "../../assets/logo-footer.png"; // তোমার logo path

const Footer = () => {
    return (
        <footer className="bg-[#06091F] text-white mt-40 relative">

            {/* Newsletter Section */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative -top-24">
                    <div className="bg-white rounded-3xl border-2 border-white p-4 shadow-lg">
                        <div
                            className="rounded-3xl py-16 px-6 text-center"
                            style={{
                                background:
                                    "linear-gradient(135deg, #E8F8FF 0%, #FFFFFF 50%, #FFF2D7 100%)",
                            }}
                        >
                            <h2 className="text-4xl font-bold text-black mb-3">
                                Subscribe to our Newsletter
                            </h2>

                            <p className="text-gray-600 mb-8">
                                Get the latest updates and news right in your inbox!
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full md:w-96"
                                />

                                <button
                                    className="btn border-0 text-black"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #f472b6, #facc15)",
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 pb-10">
                <div className="flex justify-center mb-16">
                    <img src={logo} alt="logo" className="w-28" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* About */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">
                            About Us
                        </h3>

                        <p className="text-gray-400 leading-8">
                            We are a passionate team dedicated to providing
                            the best services to our customers.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">
                            Subscribe
                        </h3>

                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>

                        <div className="join w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input join-item w-full text-black"
                            />

                            <button
                                className="btn join-item border-0 text-black"
                                style={{
                                    background:
                                        "linear-gradient(to right, #facc15, #f472b6)",
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
                    @2024 Your Company All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;