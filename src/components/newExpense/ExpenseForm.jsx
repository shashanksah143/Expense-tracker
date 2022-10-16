import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let userInput = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(userInput);
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            type="text"
            onChange={titleChangeHandler}
            value={title}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
            required={true}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.toogleHandler}>
          Cancel
        </button>
        <button type="submit" onClick={props.toogleFormHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
