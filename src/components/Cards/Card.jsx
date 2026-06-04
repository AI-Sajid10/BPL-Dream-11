import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Card = ({
    player,
    setCoin,
    Coin,
    setSelectedPlayers,
    selectedPlayers,
}) => {

    const isSelected = selectedPlayers.some(
        (p) => p.id === player.id
    );

    const handlechoosePlayer = () => {

        if (isSelected) {
            toast.warning("Player already selected!");
            return;
        }

        if (Coin < player.price) {
            toast.error("You don't have enough coins.");
            return;
        }

        setCoin(Coin - player.price);
        setSelectedPlayers([...selectedPlayers, player]);

        toast.success(`${player.playerName} has been selected!`);
    };

    return (
        <div className="card bg-base-100 border border-gray-200 shadow-sm p-3">
            <figure className="h-64">
                <img
                    src={player.image}
                    alt={player.playerName}
                    className="w-full h-full object-cover rounded-xl"
                />
            </figure>

            <div className="card-body px-0">
                <h2 className="card-title text-xl">
                    <FaUser className="text-gray-500" />
                    {player.playerName}
                </h2>

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

                <h3 className="font-bold">Rating</h3>

                <div className="flex justify-between">
                    <span className="font-semibold">Batting</span>
                    <span className="text-gray-500">
                        {player.battingStyle}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">Bowling</span>
                    <span className="text-gray-500">
                        {player.bowlingStyle}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">Rating</span>
                    <span className="text-gray-500">{player.rating}</span>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <p className="font-bold">
                        Price: ${player.price.toLocaleString()}
                    </p>

                    <button
                        onClick={handlechoosePlayer}
                        disabled={isSelected}
                        className="btn btn-sm btn-outline"
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;