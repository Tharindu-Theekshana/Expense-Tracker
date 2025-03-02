
import './App.css'
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseProvider from './components/ExpenseProvider';


function App() {

 

  return (
    <>
  <ExpenseProvider>
  <ExpenseForm/>
  <ExpenseList/>
  </ExpenseProvider>
  
  
  
 
  
    
    </>
  )
}

export default App
