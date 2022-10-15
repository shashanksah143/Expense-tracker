import "./ExpenseItem.css";

import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);
  const titleChangeHandler = () => {
    setTitle("Updated title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={titleChangeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
