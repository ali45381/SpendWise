# SpendWise | Personal Finance Tracker

**SpendWise** is a React-based personal finance tracker designed to make everyday money management simple and organized. It allows users to record income and expenses, monitor their financial balance, and manage transactions through a clean, responsive dashboard.

## Overview

Managing personal finances starts with understanding where money comes from and where it goes. SpendWise provides a simple interface to track financial activity and view an updated summary of income, expenses, and available balance.

## Key Features

- **Financial Dashboard:** View your current balance, total income, and total expenses in one place.
- **Transaction Management:** Add and delete income or expense transactions.
- **Real-Time Calculations:** Automatically update financial summaries whenever a transaction is added or removed.
- **Input Validation:** Validate transaction details to prevent empty names and invalid amounts.
- **Persistent Data Storage:** Store transactions in browser Local Storage and retain them after page refreshes.
- **Responsive Interface:** Access the application across desktop, tablet, and mobile screen sizes.

## Technologies Used

- **React.js** – Component-based user interface development.
- **JavaScript (ES6+)** – Application logic and financial calculations.
- **HTML5** – Semantic application structure.
- **CSS3** – Styling and responsive layouts.
- **Vite** – Development environment and build tooling.
- **Local Storage** – Client-side transaction persistence.

## React Concepts Applied

Through this project, I gained practical experience with:

- Functional components and JSX
- Props and component communication
- State management using `useState`
- Side effects using `useEffect`
- Event handling and controlled forms
- Conditional rendering
- Dynamic list rendering with `map()`
- Array methods such as `filter()` and `reduce()`
- Form validation and data persistence

## Getting Started

To run the project locally, follow these instructions.

**1. Clone the repository**

```bash
git clone https://github.com/ali45381/SpendWise.git
```

**2. Navigate to the project directory**

```bash
cd SpendWise
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually `http://localhost:5173`.

## Project Structure

```text
SpendWise/
├── public/
├── src/
│   ├── component/
│   │   ├── Header.jsx
│   │   ├── balance.jsx
│   │   ├── summary.jsx
│   │   ├── AddTransaction.jsx
│   │   └── recent_transaction.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Planned Enhancements

- Transaction search and filtering
- Expense categorization
- Monthly financial summaries
- Interactive charts and spending analytics
- Backend integration and user authentication

## Developer

**Ali Fardeen Abdi**

GitHub: [ali45381](https://github.com/ali45381)

---

*SpendWise was developed as a practical project to strengthen my React development skills and gain hands-on experience building interactive, state-driven web applications.*
