//first extract transactions
//then

function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  return (
    <div className="summary-container">

      <div className="summary-card income-card">
        <p>Total Income</p>
        <h2>₹{totalIncome.toLocaleString("en-IN")}</h2>
      </div>

      <div className="summary-card expense-card">
        <p>Total Expense</p>
        <h2>₹{totalExpense.toLocaleString("en-IN")}</h2>
      </div>

    </div>
  );
}

export default Summary;
