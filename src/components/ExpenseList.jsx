import React from 'react'
import { useContext } from 'react'
import {ExpenseContext} from './ExpenseProvider';
import ShowExpenses from './ShowExpenses';

export default function ExpenseList() {

    const {expenses} = useContext(ExpenseContext);

  return (
    <div>
      {expenses.length ===0 ? <p>No Expenses</p>:expenses.map((expense, index)=> (<ShowExpenses key={index} expense={expense}/>))}
    </div>
  )
}
