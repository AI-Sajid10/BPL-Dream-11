import React from 'react';
import Card from '../../Cards/Card';

const Availableplayers = ({ playersData }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10'>
            {
                playersData.map((player)=> <Card key={player.id} player={player}></Card>)
            }
        </div>
    );
};

export default Availableplayers;