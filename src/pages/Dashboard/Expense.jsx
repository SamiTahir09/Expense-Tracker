import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import ExpenseOverView from '../../components/Expense/ExpenseOverView';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import Modal from '../../components/Modal';
import toast from 'react-hot-toast';

const Expense = () => {
    useUserAuth();

    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false)
    const [expenseData, setexpenseData] = useState([]);
    const [Loading, setLoading] = useState(false)
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null
    });

    // fetch all expense detail
    const fetchExpenseDetails = async () => {
        if (Loading) return;
        setLoading(true);

        try {
            const response = await axiosInstance.get(`${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`);
            if (response.data) {
                setexpenseData(response.data)
            }
        } catch (error) {
            console.log("Something went wrong at Income", error);
        }
        finally {
            setLoading(false);
        }
    };


    //handle add expense 
    const handleAddExpense = async (expense) => {
        const { category, amount, date, icon } = expense;

        //validations checks 
        if (!category.trim()) {
            toast.error("category is required.")
            return
        }
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error("amount should be  valid number greater than 0.")
        }
        if (!date) {
            toast.error("Date is required")

        }
        try {
            await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
                category,
                amount,
                date,
                icon
            });
            setOpenAddExpenseModal(false);
            toast.success("Expense Added Successfully");
            fetchExpenseDetails();
        } catch (error) {
            console.error(error.response?.data?.message || error.message)
            toast.error(error)
        }
    };

    useEffect(() => {
        fetchExpenseDetails();
    })
    return (
        <DashboardLayout activeMenu="Expense">
            <div className='my-5 mx-auto'>
                <div className='grrid grid-cols-1 gap-6'>
                    <div className=''>
                        <ExpenseOverView
                            transactions={expenseData}
                            onExpenseIncome={() => setOpenAddExpenseModal(true)}
                        />
                    </div>
                </div>
                <Modal
                    isOpen={openAddExpenseModal}
                    onClose={() => setOpenAddExpenseModal(false)}
                    title="Add Expense"
                >
                    <AddExpenseForm onAddExpense={handleAddExpense} />
                </Modal>
            </div>
        </DashboardLayout>
    )
}

export default Expense