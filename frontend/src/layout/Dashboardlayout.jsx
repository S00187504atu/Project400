import React, { useState } from 'react';
import { BiHomeAlt, BiLogInCircle, BiSelectMultiple } from "react-icons/bi";
import { MdExplore, MdOfflineBolt, MdPayments, MdPendingActions } from "react-icons/md";
import { GiFigurehead } from "react-icons/gi";
import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useUser } from '../hooks/useUser';
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { BsFillPostcardFill } from 'react-icons/bs';
import { SiGoogleclassroom, SiInstructure } from 'react-icons/si';
import { TbBrandAppleArcade } from 'react-icons/tb';
import { useAuth } from '../hooks/useAuth';
import { DotLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Scroll from '../hooks/useScroll';

const adminNavItems = [
    { to: "/dashboard/admin-home", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard Home" },
    { to: "/dashboard/manage-users", icon: <FaUsers className="text-2xl" />, label: "Manage Users" },
    { to: "/dashboard/manage-class", icon: <BsFillPostcardFill className="text-2xl" />, label: "Manage Class" },
    { to: "/dashboard/manage-applications", icon: <TbBrandAppleArcade className="text-2xl" />, label: "Applications" },
];
const instructorNavItem = [
    { to: "/dashboard/instructor-cp", icon: <FaHome className="text-2xl" />, label: "Home" },
    { to: "/dashboard/add-class", icon: <MdExplore className="text-2xl" />, label: "Add A class" },
    { to: "/dashboard/my-classes", icon: <IoSchoolSharp className="text-2xl" />, label: "My Classes" },
    { to: "/dashboard/my-pending", icon: <MdPendingActions className="text-2xl" />, label: "Pending Classes" },
    { to: "/dashboard/my-approved", icon: <IoMdDoneAll className="text-2xl" />, label: "Approved Classes" },
];
const student = [
    { to: "/dashboard/student-cp", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard" },
    { to: "/dashboard/enrolled-class", icon: <SiGoogleclassroom className="text-2xl" />, label: "My Enroll" },
    { to: "/dashboard/my-selected", icon: <BiSelectMultiple className="text-2xl" />, label: "My Selected" },
    { to: "/dashboard/my-payments", icon: <MdPayments className="text-2xl" />, label: "Payment History" },
    { to: "/dashboard/apply-instructor", icon: <SiInstructure className="text-2xl" />, label: "Apply for Instructor" },
];
const lastMenuItems = [
    { to: "/", icon: <BiHomeAlt className="text-2xl" />, label: "Main Home" },
    { to: "/trending", icon: <MdOfflineBolt className="text-2xl" />, label: "Trending" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];

const DashboardLayout = () => {
    const [open, setOpen] = useState(true);
    const { loader, logout } = useAuth();
    const { currentUser } = useUser();
    const role = currentUser?.role;
    const navigate = useNavigate(); 
    //const role ="admin"

    const handleLogout = (e) => {
        Swal.fire({
            title: 'Are you sure you wish to logout?',
            text: "Are you sure you wish to logout?!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire(
                            'Logged out..!',
                            'You have been logged out successfully',
                            'success'
                        );
                        navigate("/");  // Navigate to home page on successful logout
                    })
                    .catch((err) => { 
                        Swal.fire(
                            'Error!',
                            err.message,
                            'error'
                        );
                    })
            }
        });
    };

    if (loader) {
        return <div className='flex justify-center items-center h-screen'>
        <DotLoader
            color="#FF1949"
            size={75}
        />
    </div>
    }

    return (
        <div className="flex">
            <div
                className={`${open ? "w-72 overflow-y-auto" : "w-[90px] overflow-auto"
                    } bg-dark-purple h-screen p-5 hidden md:block pt-8 relative duration-300`}
            >
                <div className="flex gap-x-4 items-center">
                    <img
                        src='/gaa-logo.png'
                        onClick={() => setOpen(!open)}
                        className={`cursor-pointer h-[40px] duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <Link to="/">
                    <h1
                        className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && "scale-0"
                            }`}
                        onClick={() => setOpen(!open)}
                    >
                        Game Sense
                    </h1>
                    </Link>

                </div>
                {/* Nav links  */}
                {
                    role === 'admin' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {role === 'admin' && adminNavItems.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                        `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                        }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                    }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                {
                    role === 'instructor' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {instructorNavItem.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                        `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                        }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                    }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                {
                    role === 'user' && <ul className="pt-6">
                        <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                        {student.map((menuItem, index) => (
                            <li key={index} className="mb-2">
                                <NavLink
                                    to={menuItem.to}
                                    className={({ isActive }) =>
                                        `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                        }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                    }
                                >
                                    {menuItem.icon}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {menuItem.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                <ul className="pt-6">
                    <p className={`ml-3 uppercase text-light-gray-4 ${!open && "hidden"}`}><small>Useful Links</small></p>
                    {lastMenuItems.map((menuItem, index) => (
                        <li key={index} className="mb-2">
                            <NavLink
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                                }
                            >
                                {menuItem.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menuItem.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <NavLink
                            onClick={() => handleLogout()}
                            className={({ isActive }) =>
                                `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                }  duration-150 rounded-md inline-flex p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                            }
                        >
                            <BiLogInCircle className='text-2xl' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Logout
                            </span>
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="h-screen overflow-y-auto px-8 flex-1">
                <Outlet />
                <ToastContainer />
                <Scroll/>
            </div>
        </div>
    );
};

export default DashboardLayout;
