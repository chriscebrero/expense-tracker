import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { HistoryList } from './components/HistoryList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './GlobalState';

function App() {
  return (

    <GlobalProvider>
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <HistoryList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
