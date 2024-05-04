import React from 'react';
import { useParams } from 'react-router-dom';

const BotSpecs = ({ bots }) => {
  const { id } = useParams();
  const bot = bots.find((robot) => robot.id === parseInt(id));

  return (
    <div>
      <h1>Bot Specs</h1>
      {bot && (
        <div>
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
         
        </div>
      )}
    </div>
  );
};

export default BotSpecs;
