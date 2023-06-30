import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses

    return (
        <div>
            {expenses.map((expenses) => <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>)}
        </div>
        
    );
};

export default Expenses;