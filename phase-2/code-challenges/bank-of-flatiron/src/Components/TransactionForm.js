import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, handleSearch }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !category || !amount || !date) return;
    addTransaction({ description, category, amount, date });

    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value); 
    handleSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <button type="submit">Add Transaction</button>
      </form>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInput}
        />
      </div>
    </div>
  );
};

export default TransactionForm;
