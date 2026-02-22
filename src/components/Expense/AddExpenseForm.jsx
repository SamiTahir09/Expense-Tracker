import React, { useState } from 'react'
import Input from '../Inputs/Input'
import EmojiPickerPopup from '../EmojiPickerPopup'

const AddExpenseForm = ({ onAddExpense }) => {
    const [expense, setexpense] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setexpense({ ...expense, [key]: value });
    return (
        <div>
            <EmojiPickerPopup
                icon={expense.icon}
                onSelect={(selectedicon) => handleChange("icon", selectedicon)} />
            <Input
                value={expense.category}
                onChange={({ target }) => handleChange("category", target.value)}
                label="Category"
                placeholder="Rent , Grocery .etc"
            />
            <Input
                value={expense.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                type="number"
                placeholder="$600"
            />
            <Input
                value={expense.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                type="date"

            />
            <div className='flex justify-end mt-6'>
                <button type='button' className='add-btn add-btn-fill' onClick={() => onAddExpense(expense)}>
                    Add Expense
                </button>
            </div>

        </div>
    )
}

export default AddExpenseForm