import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "Shopping", cost: 20 },
    { id: 2, name: "Holiday", cost: 50 },
    { id: 3, name: "Journey", cost: 10 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
