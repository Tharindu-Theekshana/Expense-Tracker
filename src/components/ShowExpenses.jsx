import React, { useContext, useState } from 'react'
import ExpenseProvider, { ExpenseContext } from './ExpenseProvider';
import ExpenseForm from './ExpenseForm';


export default function ShowExpenses({expense}) {

 const {removeExpense,updateExpense} = useContext(ExpenseContext);

 const [isEditing, setIsEditing] = useState(false);
 const [updateTitle, setUpdateTitle] = useState(expense.title);
 const [updateAmount, setUpdateAmount] = useState(expense.amount);

const handleSubmit = () => {
  updateExpense(expense.id,{title: updateTitle, amount: parseFloat(updateAmount)});
  setIsEditing(false);
}
 

  return (
    
            
      <tr>
            <td className='border border-gray-500 px-4 py-4'>{isEditing? <input className='border px-2 py-1'  type='text' value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)}/>: expense.title}</td>
            <td className='border border-gray-500 px-4 py-4'>{isEditing? <input className='border px-2 py-1'  type='number' value={updateAmount} onChange={(e) => setUpdateAmount(e.target.value)}/>: expense.amount}</td>
            <td className='border border-gray-400 px-4 py-4 flex justify-center gap-4'>

              {isEditing? <button className='border p-1 px-3 bg-green-500 hover:bg-green-600 rounded-xl hover:scale-110 transition-transform duration-300' onClick={handleSubmit}>Save</button> : <button className='border p-1 px-3 bg-green-500 hover:bg-green-600 rounded-xl hover:scale-110 transition-transform duration-300' onClick={()=>{setIsEditing(true);}}>Edit</button> }
              
              <button className='border p-1 px-3 bg-red-500 hover:bg-red-600 rounded-xl hover:scale-110 transition-transform duration-300' onClick={()=>removeExpense(expense.id)}>Delete</button>
              
            </td>
      </tr>
     
  )
}
