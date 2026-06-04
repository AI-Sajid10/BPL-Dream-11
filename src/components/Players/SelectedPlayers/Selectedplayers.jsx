import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Selectedplayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);
    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter((p) => p.id !== player.id);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }
    return (
        <div className="max-w-7xl mx-auto px-16 space-y-5 mt-4">
            {selectedPlayers.length === 0 ? <div className="py-20">
                <h2 className="text-center text-gray-500 font-bold text-xl">No players selected.</h2>
                <p className="text-center text-gray-500">go to the player selection page to add players.</p>
            </div> :
                selectedPlayers.map((player, index) => {
                    return (
                        <div>
                            <div key={index} className="flex justify-between items-center gap-6 p-7 rounded-2xl border">
                                <div className="flex items-center gap-4">
                                    <img src={player.image} alt={player.playerName} className="w-20 h-20 rounded-lg object-cover" />
                                    <div>
                                        <h2 className="flex items-center gap-2 font-bold text-2xl"><FaRegUser />{player.playerName}</h2>
                                        <p>{player.playerType}</p>
                                    </div>
                                </div>
                                <button className="btn" onClick={() => handleDeleteSelectedPlayer(player)}>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Selectedplayers;