import React from 'react'

export default function ShowExpenses({expense}) {
  return (
    <div>
        <div>{expense.title}</div>
        <div>{expense.amount}</div>
      
    </div>
  )
}
