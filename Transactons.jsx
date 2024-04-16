import React, { useState } from 'react';




function Transactions() {

  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [filterType, setFilterType] = useState('all'); 
  const [sortType, setSortType] = useState('amount'); 

  const addTransaction = () => {
    
    if (category.trim() !== '' && amount.trim() !== '' && !isNaN(amount)) {
      setTransactions([
        ...transactions,
        { category, amount: parseFloat(amount) }
      ]);
      setCategory('');
      setAmount('');
    } else {
      alert('Please enter valid category and amount.');
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (filterType === 'all') return true;
    if (filterType === 'income') return transaction.amount > 0;
    if (filterType === 'expenses') return transaction.amount < 0;
  });

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortType === 'amount') return a.amount - b.amount;
    if (sortType === 'category') return a.category.localeCompare(b.category);
  });

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  

  return (
    <div>
      <h1>Add Transactions</h1>
      <h4>NOODES CODER</h4>
      <div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <div>
        <label>
          Filter by:
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All Transactions</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
            <option value=""></option>
          </select>
        </label>
        <label>
          Sort by:
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="amount">Amount</option>
            <option value="category">Category</option>
          </select>
        </label>
      </div>
      <div>
        <h2>Transactions:</h2>
        <ul>
          {sortedTransactions.map((transaction, index) => (
            <li key={index}>
              {transaction.category}: ${transaction.amount.toFixed(2)}
              <button onClick={() => deleteTransaction(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Transactions;
