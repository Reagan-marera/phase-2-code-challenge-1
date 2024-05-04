import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import BotSpecs from './Components/ BotSpecs';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch('http://localhost:3003/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  };

  const addToArmy = (bot) => {
    if (!army.some(robot => robot.id === bot.id)) {
      setArmy([...army, bot]);
      setBots(bots.filter(robot=> robot.id !== bot.id));
    }
  };

  const releaseFromArmy = (botId) => {
    setArmy(army.filter(robot => robot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3003/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter(robot => robot.id !== botId));
        fetchBots();
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BotCollection bots={bots} addToArmy={addToArmy} />} />
        <Route path="/army" element={<YourBotArmy army={army} releaseFromArmy={releaseFromArmy} dischargeBot={dischargeBot} />} />
        <Route path="/bots/:id" element={<BotSpecs bots={bots} />} />
      </Routes>
    </Router>
  );
};

export default App;
