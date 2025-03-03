import React, { useState } from 'react'
import { useContext } from 'react';
import {ExpenseContext} from './ExpenseProvider';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



export default function ExpenseForm() {

  const schema = yup.object().shape({
    title: yup.string().required("Title is required."),
    amount: yup.number().typeError("Please enter a valid number.").positive("Amount must be greater than zero."),
  });


  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });


  const {addExpenses} =useContext(ExpenseContext);

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState();


    const whenSubmit = (e) => {
        
        addExpenses({title,amount: parseFloat(amount)});
        setTitle('');
    setAmount('');
    }
    
  return (
<div>

    <h1 class=" text-[54px] text-blue-500" >Expense Tracker</h1>
    <div className=" flex justify-center items-center min-h-96 bg-gray-100">
        
      <form onSubmit={handleSubmit(whenSubmit)} className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className='mb-2'>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type='text' placeholder='Title...' {...register("title")} value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <p className='pt-2 text-red-600 text-sm'>{errors.title?.message}</p>
            </div>
        <div className='mb-2'>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type='text' placeholder='Amount...' {...register("amount")} value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
            <p className='pt-2 text-red-600 text-sm'>{errors.amount?.message}</p>
            </div>
        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Add expenses</button>
      </form>
    </div>

   
    </div>
  )
}
