import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [expenseFormTitle, setExpenseFormTitle] = useState('');
  const [expenseFormAmount, setExpenseFormAmount] = useState('');
  const [expenseFormDate, setExpenseFormDate] = useState('');

  //Title
  const titleChangeHandler = (event) => {
    setExpenseFormTitle(event.target.value);
  };

  //Amount
  const amoutChangeHandler = (event) => {
    setExpenseFormAmount(event.target.value);
  };

  //Date
  const dateChangeHandler = (event) => {
    setExpenseFormDate(event.target.value);
  };
  // Add Expense
  const addExpenseHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: expenseFormTitle,
      amount: expenseFormAmount,
      date: expenseFormDate,
    };

    onSaveExpenseData(expenseData); //Call it and pass in your data as the argument

    setExpenseFormTitle('');
    setExpenseFormAmount('');
    setExpenseFormDate('');
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={expenseFormTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={expenseFormAmount}
            onChange={amoutChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            max='2024-12-31'
            value={expenseFormDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
