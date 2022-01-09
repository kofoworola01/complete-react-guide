import React from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter/expensefilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const handleFilteredValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    const date = new Date(expense.date);
    const year = date.getFullYear();
    return year.toString() === filteredYear;
  });

  return (
    <div>
      <ExpenseFilter
        filterdValue={handleFilteredValue}
        selected={filteredYear}
      />
      {filteredExpenses.length === 0 ? (
        <p style={{ color: 'red' }}>Nothing was Found!!!!</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
