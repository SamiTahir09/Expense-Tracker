import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import CustomBarChart from '../Charts/CustomBarChart'
import { prepareIncomeBarchartData } from '../../utils/helper';

const IncomeOverView = ({ transactions, onAddIncome }) => {
    const [chartData, setchartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarchartData(transactions);
        setchartData(result);

    }, [transactions]);
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <div>
                    <h5 className='text-2xl'>Income OverView </h5>
                    <p className='text-sm text-gray-400 mt-0.5'>Track your earnings over time and analyze your income trends.</p>
                </div>
                <button className='add-btn' onClick={onAddIncome}> <LuPlus className='text-lg' /> Add Income</button>
            </div>
            <div className='mt-10'>
                < CustomBarChart data={chartData} />
            </div>
        </div>
    )
}

export default IncomeOverView