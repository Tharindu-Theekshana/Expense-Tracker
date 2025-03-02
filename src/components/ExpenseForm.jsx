import React, { useState } from 'react'
import { useContext } from 'react';
import {ExpenseContext} from './ExpenseProvider';



export default function ExpenseForm() {

  const {addExpenses} =useContext(ExpenseContext);

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addExpenses({title,amount: parseFloat(amount)});
        setTitle('');
    setAmount('');
    }
    
  return (
<div>

    <h1 class=" text-[54px] text-blue-500" >Expense Tracker</h1>
    <div className=" flex justify-center items-center min-h-96 bg-gray-100">
        
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className='mb-4'>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type='text' placeholder='Title...' value={title} onChange={(e)=>{setTitle(e.target.value)}} /></div>
        <div className='mb-4'>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type='text' placeholder='Amount...' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/></div>
        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Add expenses</button>
      </form>
    </div>

   
    </div>
  )
}
