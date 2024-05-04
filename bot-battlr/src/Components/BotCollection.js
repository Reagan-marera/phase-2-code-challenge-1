import React, { useState } from 'react';
import SortBar from './SortBar'; 

const BotCollection = ({ bots, addToArmy }) => {
  const [sortedBots, setSortedBots] = useState(bots); 

  const sortBots = (criteria) => {
    const sorted = [...bots].sort((a, b) => {
      if (criteria === 'health') {
        return b.health - a.health; 
      } else if (criteria === 'damage') {
        return b.damage - a.damage;
      } else if (criteria === 'armor') {
        return b.armor - a.armor; 
      }
      return 0; 
    });
    setSortedBots(sorted);
  };

  return (
    <div>
      <SortBar sortBots={sortBots} />
      <h2>BOT COLLECTION</h2>
      <ul className='all'>
        {sortedBots.map(bot => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} /> {/* Image display */}
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            {bot.description && <p>Description: {bot.description}</p>}
            <button onClick={() => addToArmy(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
