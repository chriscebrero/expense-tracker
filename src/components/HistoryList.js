import React, { useContext } from 'react';
import '../stylesheets/HistoryList.css';
import { Transaction } from './Transaction';
import { GlobalContext } from '../GlobalState';

export const HistoryList = () => {
    const { transactions } = useContext(GlobalContext);
  
    return (
      <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
      </>
    )
  }

export default HistoryList;