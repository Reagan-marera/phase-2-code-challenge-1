import React from 'react';

const TransactionsTable = ({ transactions }) => {
  
  const allTransactions = [
    {
      id: 1,
      description: 'Groceries',
      category: 'Food',
      amount: '$50.00',
      date: '2024-04-28',
    },
    {
      id: 2,
      description: 'Movie Tickets',
      category: 'Entertainment',
      amount: '$25.00',
      date: '2024-04-29',
    },
    {
      id: 3,
      description: 'Online Shopping',
      category: 'Shopping',
      amount: '$100.00',
      date: '2024-04-30',
    },
  ];

  return (
    <table className='transactions-table'>
      <thead>
        <tr>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      
        {allTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
