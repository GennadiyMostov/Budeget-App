import React from 'react';
import './ExpensesFilter.css';
import moment from 'moment';

const ExpensesFilter = ({ items, onFilter }) => {
  const selectChangeHandler = (event) => {
    const filtered = items.filter((item) => {
      const itemYear = moment(item.date).format('YYYY');

      return itemYear === event.target.value;
    });

    onFilter(filtered);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter By Year</label>
        <select onChange={selectChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
