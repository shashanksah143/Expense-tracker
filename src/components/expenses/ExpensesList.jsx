import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expense Found</p>;
  }
  return props.items.map((item) => (
    <ul className="expenses-list" key={item.id}>
      <ExpenseItem expense={item} />
    </ul>
  ));
};

export default ExpensesList;
