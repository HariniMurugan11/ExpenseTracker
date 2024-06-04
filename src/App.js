import React, { useState } from 'react';

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [salary, setSalary] = useState('');

  const addTransaction = () => {
    if (category && amount) {
      setTransactions([...transactions, { category, amount: parseFloat(amount) }]);
      setCategory('');
      setAmount('');
    }
  };

  const calculateTotalExpenditure = () => {
    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  const calculateBalance = () => {
    const totalExpenditure = calculateTotalExpenditure();
    const parsedSalary = parseFloat(salary);
    return isNaN(parsedSalary) ? 0 : parsedSalary - totalExpenditure;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Expense Tracker</h1>
      <div style={styles.inputGroup}>
        <input
          type="number"
          placeholder="Total Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <button onClick={addTransaction} style={styles.button}>Add</button>
      </div>
      <h2 style={styles.expenditure}>Total Expenditure: {calculateTotalExpenditure()}</h2>
      <h2 style={styles.balance}>Balance: {calculateBalance()}</h2>
      <ul style={styles.list}>
        {transactions.map((transaction, index) => (
          <li key={index} style={styles.listItem}>
            {transaction.category}: {transaction.amount}
          </li>
        ))}

        {/* {Array.from({ length: transactions.length }, (i) => (
        <li key={i} style={styles.listItem}>
          {transactions[i].category}: {transactions[i].amount}
        </li>
        ))} */}

      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '8px',
    margin: '100px auto'
    
  },
  header: {
    textAlign: 'center',
    color: 'black',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '95%',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  expenditure: {
    color: 'red',
  },
  balance: {
    color: 'green',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid black',
  },
};

export default ExpenseTracker;
