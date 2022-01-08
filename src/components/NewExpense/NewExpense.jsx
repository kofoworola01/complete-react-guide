import React from 'react'
import ExpenseForm from '../Expenses/ExpenseForm/ExpenseForm'

import './newexpense.css'

const NewExpense = (props) => {

  const saveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm expenseDataSubmitted={saveExpenseData} />
    </div>
  )
}

export default NewExpense
