
import { useState } from 'react';

function AddTransaction({ onAddTransaction }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter a transaction name');
      return;
    }

    if (
      amount === '' ||
      !Number.isFinite(Number(amount)) ||
      Number(amount) <= 0
    ) {
      setError('Please enter a valid positive amount');
      return;
    }

    setError('');

    onAddTransaction({
      name: name.trim(),
      amount: Number(amount),
      type: type
    });

    setName('');
    setAmount('');
    setType('expense');
  }

  return (
    <div className="add-transaction-container">
      <h2>Add New Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">Add Transaction</button>
      </form>

      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default AddTransaction;
