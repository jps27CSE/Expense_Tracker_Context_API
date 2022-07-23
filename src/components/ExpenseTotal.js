import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: £{totalExpense}</span>
    </div>
  );
};

export default ExpenseTotal;
