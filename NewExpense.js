import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveData=(getdata)=>{

    const expensedata={
      ...getdata,
      id:Math.random().toString()
    };

   props.ondata(expensedata);

  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    // <div className='new-expense'>
    //   <ExpenseForm  ongetdata={saveData} />
    // </div>

    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          ongetdata={saveData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;



