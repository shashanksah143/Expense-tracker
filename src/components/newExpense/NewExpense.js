import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (userInputObject) => {
    const newExpenceItem = {
      id: Math.random().toString(),
      ...userInputObject,
    };
    props.addExpense(newExpenceItem);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
