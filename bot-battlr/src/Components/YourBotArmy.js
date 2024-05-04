import React from 'react';

const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
            {bot.name} - {bot.description}
            <button onClick={() => addToArmy(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
