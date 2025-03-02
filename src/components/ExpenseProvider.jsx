import React, { useState } from 'react'
import { createContext } from 'react'


export const ExpenseContext = createContext();

export default function ExpenseProvider({children}) {

    const [expenses,setExpenses] = useState([]);

    const addExpenses = (expense) => {
        setExpenses([...expenses,expense])
    }


  return (
    <div>
        <ExpenseContext.Provider value={{expenses,addExpenses}}>
             {children}
        </ExpenseContext.Provider>
      
    </div>
  )
}
