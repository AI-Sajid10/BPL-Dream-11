import React from 'react';
import Card from '../../Cards/Card';

const Availableplayers = ({ playersData }) => {
    return (
        <div>
            {
                playersData.map((player)=> <Card key={player.id} player={player}></Card>)
            }
        </div>
    );
};

export default Availableplayers;