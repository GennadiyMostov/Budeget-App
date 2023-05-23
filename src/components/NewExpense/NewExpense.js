import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [addForm, setAddForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const appendExpenseFormHandler = () => {
    setAddForm(!addForm);
  };

  const expenseForm = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onSetAddForm={appendExpenseFormHandler}
    />
  );

  const expenseFormButton = (
    <button onClick={appendExpenseFormHandler}>Add Expense</button>
  );

  return (
    <div className='new-expense'>
      {addForm ? expenseForm : expenseFormButton}
    </div>
  );
};

export default NewExpense;
