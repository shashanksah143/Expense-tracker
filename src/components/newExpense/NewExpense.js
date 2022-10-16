import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isFormOpen, toggleFormState] = useState(false);
  const toogleFormHandler = (event) => {
    event.preventDefault();
    toggleFormState((prevState) => !prevState);
  };
  const saveExpenseDataHandler = (userInputObject) => {
    const newExpenceItem = {
      id: Math.random().toString(),
      ...userInputObject,
    };
    props.addExpense(newExpenceItem);
  };
  return (
    <div className="new-expense">
      {isFormOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toogleHandler={toogleFormHandler}
        />
      ) : (
        <button onClick={toogleFormHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
