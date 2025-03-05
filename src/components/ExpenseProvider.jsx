import React, { useState } from 'react'
import { createContext } from 'react'


export const ExpenseContext = createContext();

export default function ExpenseProvider({children}) {

    const [expenses,setExpenses] = useState([]);

    const addExpenses = (expense) => {
        setExpenses([...expenses,expense])
    }

    const removeExpense = (id) => {
        const newExpense = expenses.filter((expense) => expense.id !== id);
        setExpenses(newExpense);
        
    }

    const updateExpense = (id,updateData) => {
        setExpenses(expenses.map((expense) => (expense.id === id ? {...expense, ...updateData}:expense)));
        
    }


  return (
    <div>
        <ExpenseContext.Provider value={{expenses,addExpenses,removeExpense,updateExpense}}>
             {children}
        </ExpenseContext.Provider>
      
    </div>
  )
}
