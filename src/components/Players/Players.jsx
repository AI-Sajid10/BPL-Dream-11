import React from 'react';
import { use } from 'react';
import Availableplayers from './AvialablePlayers/Availableplayers';

const Players = ({ playersPromise }) => {
    const playersData = use(playersPromise);
    return (
        <div>
            <Availableplayers playersData={playersData}></Availableplayers>
        </div>
    );
};

export default Players;