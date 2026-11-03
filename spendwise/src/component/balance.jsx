
function Balance({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="balance-card">
      <p>Total Balance</p>

      <h1>
        ₹{balance.toLocaleString("en-IN")}
      </h1>

      <span>Your current financial balance</span>
    </div>
  );
}

export default Balance;
