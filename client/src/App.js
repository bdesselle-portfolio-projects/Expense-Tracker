import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import './App.css'

// Components
import { Header } from './components/Header'
import { Budget } from './components/Budget'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Budget />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
