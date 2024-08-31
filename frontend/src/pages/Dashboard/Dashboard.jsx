import React from 'react'
import { useUser } from '../../hooks/useUser';
import { DotLoader } from 'react-spinners';
import DashboardNaviagte from '../../routes/DashboardNaviagte';

const Dashboard = () => {
    const { currentUser, isLoading } = useUser();

    const role = currentUser?.role;


    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
        <DotLoader
            color="#FF1949"
            size={75}
        />
    </div>
    }
  return (
     <DashboardNaviagte/>
  )
}

export default Dashboard;