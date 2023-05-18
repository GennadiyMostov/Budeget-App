import moment from 'moment';
import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const month = moment(date).format('MMM');
  const day = moment(date).format('D');
  const year = moment(date).format('YYYY');

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
