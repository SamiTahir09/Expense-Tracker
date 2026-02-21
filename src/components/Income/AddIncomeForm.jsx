import React, { useState } from 'react'
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddIncomeForm = ({ onAddIncome }) => {
    const [Income, setIncome] = useState({
        source: "",
        amount: "",
        date: "",
        icon: "",
    })
    const handleChange = (key, value) => setIncome({ ...Income, [key]: value });
    return (
        <div>

            <EmojiPickerPopup
                icon={Income.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />

            <Input
                value={Income.source}
                onChange={({ target }) => handleChange("source", target.value)}
                label="Income Source"
                placeholder='Freelance , salary,etc'
                type="text"
            />
            <Input
                value={Income.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                placeholder='$400'
                type="number"
            />
            <Input
                value={Income.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                placeholder=''
                type="date"
            />
            <div className='flex justify-end mt-6'>
                <button type='button' className='add-btn  add-btn-fill'
                    onClick={() => onAddIncome(Income)}>
                    Add Income
                </button>
            </div>
        </div>
    )
}

export default AddIncomeForm