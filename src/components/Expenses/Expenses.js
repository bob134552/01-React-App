import "./Expenses.css"
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [chosenYear, setChosenYear] = useState('2020');

    const filterSelectionHandler = selection => {
        setChosenYear(selection);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === chosenYear;
    });

    return (
            <Card className="expenses">
                <ExpensesFilter onFilterHandler={filterSelectionHandler} year={chosenYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
    );
};

export default Expenses;