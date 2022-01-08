import React from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter/expensefilter'

const Expenses = (props) => {

  const handleFilteredValue = (data) => {
    console.log(data, 'llllll')
  }

  return (
    <div>
      <ExpenseFilter filterdValue={handleFilteredValue} />
      {props.item.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
      />
      ))}
    </div>
  )
}

export default Expenses
