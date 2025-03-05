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


  return (
    <div>
        <ExpenseContext.Provider value={{expenses,addExpenses,removeExpense}}>
             {children}
        </ExpenseContext.Provider>
      
    </div>
  )
}
