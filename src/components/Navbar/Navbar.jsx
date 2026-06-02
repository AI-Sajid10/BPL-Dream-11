import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <img src='/src/assets/logo.png'></img>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2 font-bold text-xl">
                        0 Coin
                       <img src="/src/assets/Icon.png" alt="Icon" width="20" height="20"></img>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;