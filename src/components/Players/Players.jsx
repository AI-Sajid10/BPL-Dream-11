import React from 'react';
import { use, useState } from 'react';
import Availableplayers from './AvialablePlayers/Availableplayers';
import Selectedplayers from './SelectedPlayers/Selectedplayers';

const Players = ({ playersPromise, setCoin, Coin }) => {
    const playersData = use(playersPromise);
    const [selectedType, setselectedType] = useState("available"); 
    return (
        <div>

            <div className="flex justify-between items-center max-w-7xl mx-auto lg:px-17 px-4 mt-10">
                {selectedType === "available" ? <h2 className="font-bold text-xl">Available Players</h2> : <h2 className="font-bold text-xl">Selected Players</h2>}

                <div>
                    <button onClick={() => setselectedType("available")} className={`btn ${selectedType==="available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setselectedType("selected")} className={`btn ${selectedType==="selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected</button>
                </div>
            </div>
            {selectedType === "available" ? <Availableplayers playersData={playersData} setCoin={setCoin} Coin={Coin}></Availableplayers> : <Selectedplayers></Selectedplayers>}
        </div>
    );
};

export default Players;