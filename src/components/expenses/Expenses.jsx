import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  const expensesChanageHandler = (year) => {
    setSelectedYear(year);
    console.log(selectedYear);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={expensesChanageHandler}
          selected={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
