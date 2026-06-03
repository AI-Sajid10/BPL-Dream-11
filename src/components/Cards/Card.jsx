import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const Card = ({ player }) => {
  return (
    <div className="card bg-base-100 w-96 border border-gray-200 shadow-sm p-3">
      <figure>
        <img
          src={player.image}
          alt={player.playerName}
          className="w-full h-64 object-cover rounded-xl"
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

          <button className="btn btn-sm btn-outline">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;