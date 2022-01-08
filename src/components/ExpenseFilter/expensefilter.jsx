import React, {useState} from 'react'
import './expensefilter.css'

const ExpenseFilter = (props) => {

  const [filterYear, setFilterYear] = useState('2019')

  const handleChange = (e) => {
    // console.log(e.target.value, 'hhhh')
    const { name, value } = e.target
    setFilterYear((preState) => ({
      ...preState,
      [name]:  value
    }))
    props.filterdValue(e.target.value, 'hhhh')
  }

  console.log(filterYear, 'lllll')

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleChange} value={filterYear} name='filter'>
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
