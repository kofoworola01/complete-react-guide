import React from 'react'
import './expensefilter.css'

const ExpenseFilter = (props) => {

  const handleChange = (e) => {
    props.filterdValue(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleChange} value={props.selected}>
          <option value='2022'>2019</option>
          <option value='2021'>2020</option>
          <option value='2020'>2021</option>
          <option value='2019'>2012</option>
        </select>
      </div>
  </div>
  )
}

export default ExpenseFilter
