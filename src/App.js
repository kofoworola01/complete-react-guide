import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses'

const DummyExpenses = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 520.99,
    date: new Date(2019, 2, 28)
  },
  {
    id: 2,
    title: 'Car Payment',
    amount: 599.99,
    date: new Date(2020, 9, 18)
  },
  {
    id: 2,
    title: 'Book Payment',
    amount: 599.99,
    date: new Date(2019, 9, 18)
  }
]


const App = () => {

  const [expense, setExpense] = useState(DummyExpenses)

  const AppStyle = {
    backgroundColor: '#2a2a2a',
    padding: 20,
    margin: '50px auto',
    width: '65%',
    borderRadius: '10px'
  }

  const handleAddExpense = (expenses) => {
    setExpense((prevExpense) => {
      return [expenses, ...prevExpense]
    })
  }
 

  return (
    <div style={AppStyle}>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses 
        item={expense} 
      />
    </div>
  )
}

export default App
