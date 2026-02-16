import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import IncomeOverView from '../../components/Income/IncomeOverView'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPath'

const Income = () => {
    const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false)

    const [incomeData, setIncomeData] = useState([]);
    const [Loading, setLoading] = useState(false)
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null
    });

    // get all income details 
    const fetchIncomeDetails = async () => {
        if (Loading) return;
        setLoading(true);

        try {
            const response = await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`);
            if (response.data) {
                setIncomeData(response.data)
            }
        } catch (error) {
            console.log("Something went wrong at Income", error);
        }
        finally {
            setLoading(false);
        }
    };

    //handle add income 
    const handleAddIncome = async (income) => {

    };
    //delete income
    const deleteIncome = async (id) => { };

    //handle download income details

    const handledownloadIncome = async () => { };

    useEffect(() => {
        fetchIncomeDetails();
    })

    return (
        <DashboardLayout activeMenu="Income">
            <div className='my-5 mx-auto'>
                <div className='grid grid-cols-1 gap-6'>
                    <div className=''>
                        <IncomeOverView
                            transactions={incomeData}
                            onAddIncome={() => setOpenAddIncomeModal(true)}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Income