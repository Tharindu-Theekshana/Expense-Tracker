import React from 'react'
import { useContext } from 'react'
import {ExpenseContext} from './ExpenseProvider';
import ShowExpenses from './ShowExpenses';

export default function ExpenseList() {

    const {expenses} = useContext(ExpenseContext);

  return (
    <div className='bg-gray-100 min-h-56'>
      {expenses.length ===0 ? (<h1 className='text-4xl text-green-600'>No Expenses</h1>):(
      <table className=' bg-gray-300 w-5/6 ml-25 '>
        
      <tr>
          <th className='border border-gray-500 px-4 py-4'>Expense Title</th>
          <th className='border border-gray-500 px-4 py-4'>Amount (LKR)</th>
          <th className='border border-gray-500 px-4 py-4'>Action</th>
        </tr>
        <tbody>
        {expenses.map((expense, index)=> (<ShowExpenses key={index} expense={expense}/>))}
      
        
        </tbody>
      </table>
)}
</div>
  )
}
