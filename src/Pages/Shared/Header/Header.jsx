import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../provider/AuthProvider';
const Header = () => {
    const {user, logout} = useContext(AuthContext)

    const navItems = <>
        <li className='text-xl'><Link to='/'>Home</Link></li>
        <li className='text-xl'><Link to='/about'>About</Link> </li>
        <li className='text-xl'><Link to='/bookings'>Service</Link> </li>
        <li className='text-xl'><Link to='/bookings'>Project</Link> </li>
        <li className='text-xl'><Link to='/bookings'>Contact</Link> </li>
    </>

    return (
        <div className=''>
            <div className="navbar fixed z-10 bg-opacity-90 h-28 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' >

                        <img className='h-36' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user ? <Link onClick={logout} className='btn btn-outline btn-primary' >Logout</Link>:<Link to="login" className='btn btn-outline btn-primary' >Login</Link>
                    }
                    <button className="btn btn-outline btn-primary">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;