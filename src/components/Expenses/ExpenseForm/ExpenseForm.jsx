import React, { useState } from 'react';

import './expenseform.css';

const ExpenseForm = (props) => {
  const [inputValues, setInputValues] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const clearInputValue = () => {
    setInputValues((preState) => ({
      ...preState,
      title: '',
      date: '',
      amount: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.expenseDataSubmitted(inputValues);
    setTimeout(() => {
      clearInputValue();
    }, 2000);
  };

  return (
    <div>
      {showForm ? (
        <form>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input
                type='text'
                onChange={handleChange}
                value={inputValues.title}
                name='title'
              />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                onChange={handleChange}
                value={inputValues.amount}
                name='amount'
              />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                min='2018-01-01'
                max='2022-12-31'
                onChange={handleChange}
                value={inputValues.date}
                name='date'
              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className='new-expense__actions'>
              <button
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
            <div className='new-expense__actions'>
              <button type='submit' onClick={handleSubmit}>
                Add Expense
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button onClick={() => {
          setShowForm(true)
          // clearInputValue()
        }}>Add New Expense</button>
      )}
    </div>
  );
};

export default ExpenseForm;
