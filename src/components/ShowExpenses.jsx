import React, { useContext } from 'react'


export default function ShowExpenses({expense}) {

 

  return (
    
      <tr>
            <td className='border border-gray-500 px-4 py-4'>{expense.title}</td>
            <td className='border border-gray-500 px-4 py-4'>{expense.amount}</td>
            <td className='border border-gray-400 px-4 py-4 flex justify-center gap-4'>
              
              <button className='border p-1 px-3 bg-green-500 hover:bg-green-600 rounded-xl hover:scale-110 transition-transform duration-300'>Update</button>
              <button className='border p-1 px-3 bg-red-500 hover:bg-red-600 rounded-xl hover:scale-110 transition-transform duration-300'>Delete</button>
              
            </td>
      </tr>
   
  )
}
