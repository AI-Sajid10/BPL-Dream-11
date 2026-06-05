import React from 'react';
import logo from '../../assets/logo.png';
import icon from '../../assets/Icon.png';

const Navbar = ({ Coin }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20">
                <div className="flex-1">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2 font-bold text-xl">
                        {Coin} Coins
                        <img src={icon} alt="Icon" width="20" height="20" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;