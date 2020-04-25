import React, {useState, useContext} from 'react'
import { GlobalContext } from '../GlobalState';
import '../stylesheets/AddTransaction.css';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Item</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter expenses" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expenses, positive - incomes)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder />
        </div>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;