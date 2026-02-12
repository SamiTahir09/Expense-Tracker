import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';

const Home = () => {
    useUserAuth();

    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    const fetchDashboardData = async () => {
        if (loading) {
            setLoading(true);
        }

        try {
            const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`);
            if (response.data) {
                setDashboardData(response.data)
            }
        } catch (error) {

        }
    }
    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className='my-5 mx-auto'>
                home
            </div>
        </DashboardLayout>
    )
}

export default Home