import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';
import photoURL from "../../assets/home/girl.jpg";
import {FaBars} from "react-icons/fa"
import Switch from '@mui/material/Switch'; // Import Switch from MUI
import {motion} from "framer-motion"


const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'instructors', route: '/instructors' },
    { name: 'classes', route: '/classes' },


];

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff0000",
        },
        secondary: {
            main: "#00ff00",
        },
    },

});
const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [navBg, setNavBg] = useState('bg-[#15151580');
    const user = true;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

    };

    useEffect(() => {
        const darkClass = 'dark';
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add(darkClass);
        } else {
            root.classList.remove(darkClass);
        }
    }, [isDarkMode]);

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
        if (scrollPosition > 100) {
            if (isHome) {
                setNavBg('bg-white backdrop-filter backdrop-blur-x1 bg-opacity-0 dark:text-white text-black')
            }
            else {
                setNavBg('bg-white dark:bg-black dark:text-white text-black')
            }


        }
        else {
            setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} dark:text-white text-white`)
        }
    }, [scrollPosition])
    //const user = false;

    const handleLogout = () => {
        console.log("logged out");
    }

     {/* Dev Note below needs a little tweaking */}
    return (
        
        <motion.nav 
        initial={{opcaity: 0}}
        animate={{opcaity: 1}}
        transition={{duration: 0.5}}
        className={`${isHome ? navBg : "bg-white dark:bg-black backdrop-blur-2x1"} ${isFixed ? 'static' : 'fixed'} top-o transition-colors duration-500 ease-in-out w-full z-10`}>
            <div className='lg:w-[95%] mxauto sm:px-6 lg:px-6'>
                <div className='px-4 py-4 flex items-center justify-between'>
                    {/* Logo*/}
                    <div onClick={() => navigate('/')} className='flex-shrink-0 cursor-pointer pl-7 md:p-0 flex items-center'>
                        <div>
                        <h1 className='text-2x1 inline-flex gap-3 items-center font-bold'>Game Sense <img src="/gaa-logo.png" alt="" className='w-8 h-8' /></h1>
                        <p className='font-bold text-[13px] tracking-[3px]'>Take your Game to the next level</p>
                        </div>

                    </div>

                    {/* Menu Icons*/}
                    <div className='md:hidden flex items-center'>
                        <button type='button' onClick={toggleMobileMenu} className=' text-gray-300 hover:text-white focus:outline-none'>
                            <FaBars className='h-6 w-6 hover:text-primary'/>
                        </button>
                    </div>

                    {/* Nav Links*/}
                    <div className='hidden md:block text-black dark:text-white'>
                        <div className='flex'>
                            <ul className='ml-10 flex items-center space-x-4 pr-4'>
                                {
                                    navLinks.map((link) => (
                                        <li key={link.route}>
                                            <NavLink to={link.route}
                                            style={{whiteSpace: "nowrap"}} className={({ isActive }) =>
                                                `font-bold ${isActive ? 'text-secondary ' : `${navBg.includes('ng-transparent') ?
                                                    'text-white' : 'text-black dark:text-white'}`} hover:text-secondary  duration-300`
                                            }>{link.name}</NavLink>
                                        </li>
                                    ))
                                }

                                {/* Login functionality*/}

                                {
                                    user ? null : isLogin ? (<li><NavLink to="/register" className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-secondary ' : `${navBg.includes('ng-transparent') ?
                                            'text-white' : 'text-black dark:text-white'}`} hover:text-secondary  duration-300`
                                    }>Register</NavLink></li> ): ( <li><NavLink to="/login" className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-secondary ' : `${navBg.includes('ng-transparent') ?
                                            'text-white' : 'text-black dark:text-white'}`} hover:text-secondary  duration-300`
                                    }>Login</NavLink></li>
                                    )}
                                

                                {
                                    user && <li>
                                        <NavLink to='/dashboard' className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-secondary ' : `${navBg.includes('ng-transparent') ?
                                            'text-white' : 'text-black dark:text-white'}`} hover:text-secondary  duration-300`
                                    }>Dashboard</NavLink>
                                    </li>

                                }
                                {
                                    user && <li>
                                         {/* Dev Note, Need to update placeholder photo*/}
                                        <img src={photoURL} alt="" className="h-[40px] rounded-full w-[40px]"/>
                                        </li>
                                }

                                {
                                    user && <li><NavLink onClick={handleLogout} className={'font:bold px-3 py-2 bg-red-600 text-white rounded-xl'}>Logout</NavLink></li>
                                }



                                {/* Dark Mode Toggle*/}

                                <li>
                                    <ThemeProvider theme={theme}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
                                            <h1 className='text-[8px]'>Light/dark</h1>
                                        </div>

                                    </ThemeProvider>
                                </li>



                            </ul>
                        </div>
                    </div>

                </div>

            </div>


        </motion.nav>

    )
}

export default NavBar;