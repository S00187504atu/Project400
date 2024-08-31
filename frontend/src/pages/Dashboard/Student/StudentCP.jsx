import React from 'react';
import { useUser } from '../../../hooks/useUser';
import welcome from '../../../assets/dashboard/urban-welcome.svg';
import { Link } from 'react-router-dom';

const StudentCP = () => {
    const { currentUser } = useUser();

    if (!currentUser) {
        return <div>Loading...</div>; // You can replace this with a spinner or any loading component
    }

    return (
        <div className='h-screen flex justify-center items-center p-2'>
            <div className="">
                <div className="flex justify-center items-center">
                    <img onContextMenu={e => e.preventDefault()} className='h-[200px] w-auto' placeholder='blur' src={welcome} alt="Welcome" />
                </div>
                <h1 className='text-4xl capitalize font-bold'>Hi, <span className='text-secondary italic'>{currentUser.name}</span> welcome to your dashboard</h1>
                <p className='text-center text-base'>Hey, This is a simple dashboard home</p>
                <div className="text-center">
                    <h1 className='font-bold'>You can jump to any page you want from here.</h1>
                    <div className="flex items-center justify-center my-4 gap-3 flex-wrap">
                        <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                            <Link to='/dashboard/enrolled-class'>My Enroll</Link>
                        </div>
                        <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                            <Link to='/dashboard/my-selected'>My Selected</Link>
                        </div>
                        <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                            <Link to='/dashboard/my-payments'>Payment History</Link>
                        </div>
                        <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                            <Link to='/dashboard/apply-instructor'>Join as an Instructor</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCP;
