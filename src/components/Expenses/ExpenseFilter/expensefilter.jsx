import React, {useState} from 'react'
import './expensefilter.css'

const ExpenseFilter = (props) => {

  const [filterYear, setFilterYear] = useState('2019')

  const handleChange = (e) => {
    const { value } = e.target
    setFilterYear(value)
    props.filterdValue(value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleChange} value={filterYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
  </div>
  )
}

export default ExpenseFilter
