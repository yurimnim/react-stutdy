import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.expenses.length === 0) {
    return <h2 className='expense-list__fallback'>Found no expenese.</h2>;
  }

  return (
    <ul className='expense-list'>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
