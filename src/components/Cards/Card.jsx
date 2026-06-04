import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { useState } from "react";

const Card = ({ player, setCoin, Coin, setSelectedPlayers, selectedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handlechoosePlayer = () => {
        if (Coin >= player.price) {
            let newCoin = Coin - player.price;
            setCoin(newCoin);
        } else {
            alert("You don't have enough coins to select this player.");
            return;
        }
        alert(`${player.playerName} has been selected!`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player]);
    }
    return (
        <div className="card bg-base-100  border border-gray-200 shadow-sm p-3">
            <figure className="h-64">
                <img
                    src={player.image}
                    alt={player.playerName}
                    className="w-full h-full object-cover rounded-xl"
                />
            </figure>

            <div className="card-body px-0">
                {/* Player Name */}
                <h2 className="card-title text-xl">
                    <FaUser className="text-gray-500" />
                    {player.playerName}
                </h2>

                {/* Country & Type */}
                <div className="flex justify-between items-center text-gray-500">
                    <div className="flex items-center gap-2">
                        <IoFlagSharp />
                        <p>{player.playerCountry}</p>
                    </div>

                    <button className="btn btn-sm btn-outline">
                        {player.playerType}
                    </button>
                </div>

                <div className="divider my-1"></div>

                {/* Rating */}
                <h3 className="font-bold">Rating</h3>

                {/* Batting Style */}
                <div className="flex justify-between">
                    <span className="font-semibold">Batting</span>
                    <span className="text-gray-500">{player.battingStyle}</span>
                </div>

                {/* Bowling Style */}
                <div className="flex justify-between">
                    <span className="font-semibold">Bowling</span>
                    <span className="text-gray-500">{player.bowlingStyle}</span>
                </div>

                {/* Rating Value */}
                <div className="flex justify-between">
                    <span className="font-semibold">Rating</span>
                    <span className="text-gray-500">{player.rating}</span>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center mt-3">
                    <p className="font-bold">
                        Price: ${player.price.toLocaleString()}
                    </p>

                    <button onClick={handlechoosePlayer} disabled={isSelected} className="btn btn-sm btn-outline">
                        {isSelected === true ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;