import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const expensesChanageHandler = (year) => {
    setSelectedYear(year);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={expensesChanageHandler}
          selected={selectedYear}
        />
        {props.expenses.map((item) => (
          <ExpenseItem expense={item} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
