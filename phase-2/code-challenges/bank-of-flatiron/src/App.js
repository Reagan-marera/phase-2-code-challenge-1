import React, { useState } from 'react';
import TransactionForm from './Components/TransactionForm';
import TransactionsTable from './Components/TransactionsTable';

const App  = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1 className='header'>Royal Bank of Flatiron</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionsTable transactions={transactions} />
    
    </div>
  );
};

export default App;
