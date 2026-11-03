
import { useState, useEffect } from 'react';

import Header from './component/Header';
import Balance from './component/balance';
import Summary from './component/summary';
import Transaction from './component/recent_transaction';
import AddTransaction from './component/AddTransaction';

function App() {

  // Load saved transactions from LocalStorage
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [
          { id: 1, name: 'Groceries', amount: 150, type: 'expense' },
          { id: 2, name: 'Salary', amount: 3000, type: 'income' },
          { id: 3, name: 'Shopping', amount: 200, type: 'expense' }
        ];
  });

  // Save transactions whenever they change
  useEffect(() => {
    localStorage.setItem(
      'transactions',
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // Add a new transaction
  function addTransaction(newTransaction) {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      {
        ...newTransaction,
        id: Date.now()
      }
    ]);
  }

  // Delete a transaction
  function deleteTransaction(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  }

  return (
    <div className="dashboard">

      <Header />

      <div className="dashboard-section">
        <Balance transactions={transactions} />
      </div>

      <div className="dashboard-section">
        <Summary transactions={transactions} />
      </div>

      <div className="dashboard-section">
        <AddTransaction
          onAddTransaction={addTransaction}
        />
      </div>

      <div className="dashboard-section">
        <Transaction
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
        />
      </div>

    </div>
  );
}

export default App;
