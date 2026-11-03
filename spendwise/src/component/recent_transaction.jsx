
//function Transaction({ transactions , onDeleteTransaction}){      
//
//    return(
//        
//        <>
//        {transactions.map((item)=>{
//            return(
//            <Child
//            key={item.id}
//
//            transactions ={item}
//            />  
//        );
//        })}
//        </>
//
//    );
//};

function Transaction({ transactions, onDeleteTransaction }) {
  return (
    <div className="transaction-container">
      <h2>Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p className="empty-message">No transactions yet. Add one to get started!</p>
      ) : (
        transactions.map((transaction) => (
          <div className="transaction-row" key={transaction.id}>

            <div className="transaction-info">
              <div
                className={`transaction-icon ${
                  transaction.type === "income"
                    ? "income-icon"
                    : "expense-icon"
                }`}
              >
                {transaction.type === "income" ? "+" : "−"}
              </div>

              <div>
                <h3>{transaction.name}</h3>
                <p>
                  {transaction.type === "income" ? "Income" : "Expense"}
                </p>
              </div>
            </div>

            <div className="transaction-actions">
              <span
                className={
                  transaction.type === "income"
                    ? "income-amount"
                    : "expense-amount"
                }
              >
                {transaction.type === "income" ? "+" : "−"}
                ₹{Number(transaction.amount).toLocaleString("en-IN")}
              </span>

              <button
                className="delete-btn"
                onClick={() => onDeleteTransaction(transaction.id)}
              >
                Delete
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default Transaction;
