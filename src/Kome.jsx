import React, { useState } from 'react';

function Kome() {
    const [transactions, setTransactions] = useState([]);
    const [transactionInput, setTransactionInput] = useState('');

    const handleAddTransaction = (event) => {
        event.preventDefault();
        if (transactionInput.trim() !== '') {
            setTransactions([...transactions, transactionInput]);
            setTransactionInput('');
        }
    };

    const handleEditTransaction = (index) => {
        // You can implement edit functionality here
    };

    const handleDeleteTransaction = (index) => {
        const updatedTransactions = [...transactions];
        updatedTransactions.splice(index, 1);
        setTransactions(updatedTransactions);
    };

    return (
        <>
            <form onSubmit={handleAddTransaction}>
                <input
                    type="text"
                    placeholder="add transactions"
                    value={transactionInput}
                    onChange={(e) => setTransactionInput(e.target.value)}
                />
                <button type="submit">+ Add</button> <br />
            </form>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction}
                        <button onClick={() => handleEditTransaction(index)}>Edit</button>
                        <button onClick={() => handleDeleteTransaction(index)}>× Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Kome;