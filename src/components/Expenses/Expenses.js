import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from '../UI/Card';

function Expenses(props) {
    const expenses = props.expenses

    return (
        <Card className="expenses">
            {expenses.map((expenses) => <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>)}
        </Card>
    );
};

export default Expenses;