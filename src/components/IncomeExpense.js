import React, { useContext } from 'react';
import '../stylesheets/IncomeExpense.css';
import { GlobalContext } from '../GlobalState';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
  
    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

        return (
            <div className="income-expense-container">
                <div>
                    <h4>Income</h4>
                    <p className="income">${income}</p>
                </div>
                <div>
                    <h4>Expenses</h4>
                    <p className="expense">${expense}</p>
                </div>
            </div>
        )
    }

export default IncomeExpense;