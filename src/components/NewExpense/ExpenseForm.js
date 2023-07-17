import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [isHidden, setIsHidden] = useState(true);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    // Alternative form would be adding in a single handler that checks identity and value and apply
    // change based on that input.
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // setUserInput((prevState)=> {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // Ideally use above when new state

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // Another option but the one below is optimal when update depends on previous state.

        // setUserInput((prevState)=> {
        //     return {...prevState, enteredAmount: event.target.value};
        // });
    };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        // setUserInput((prevState)=> {
        //     return {...prevState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsHidden(true)
    };


    const toggleHidden = () => {
        setIsHidden(!isHidden);
    }

    if (isHidden) {
        return (
            <button onClick={toggleHidden}>Add New Expense</button>
        )
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button onClick={toggleHidden}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;