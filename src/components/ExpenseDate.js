import React from 'react';
import moment from 'moment';

function ExpenseDate({ date }) {
  const month = moment(date).format('MMM');
  const day = moment(date).format('D');
  const year = moment(date).format('YYYY');

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
