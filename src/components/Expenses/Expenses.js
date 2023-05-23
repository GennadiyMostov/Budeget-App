import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredList, setFilteredList] = useState(items);

  //Maps Expense Items Data
  const ifExpenseContentTrue = filteredList.map((expenseData) => {
    return (
      <ExpenseItem
        key={expenseData.id}
        title={expenseData.title}
        amount={expenseData.amount}
        date={expenseData.date}
      />
    );
  });

  //If No Expense Data, Return 'p' Element, else return data.
  const expenseContent =
    filteredList.length === 0 ? <p>No Expenses Found</p> : ifExpenseContentTrue;

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter items={items} onFilter={setFilteredList} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
