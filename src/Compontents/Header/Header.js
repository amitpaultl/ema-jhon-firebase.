import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { Athcontext } from '../Context/UserContext';
import './Header.css'

const Header = () => {
    const {user,logOut} = useContext(Athcontext);
    const logout =()=>{
        logOut()
    }
    return (
        <div className='header-bg'>
            <nav className='menu-area'>
                <div className="logo-area">
                    <a href="/home"><img src={logo} alt="" /></a>
                </div>
                <div className="menu-aera">
                    <ul>
                        <li><Link to={'home'}>Home</Link></li>
                        <li><Link to={'/order-review'}>Order Review</Link></li>
                        <li><Link to={'manage-invent'}>Manage Inventory</Link></li>
                        
                        {
                           user?.uid ? <>
                           <li><Link to={''}>{user?.email ? user.email : 'o'}</Link></li>
                           <li><Link onClick={logout}>Log out</Link></li>
                           </> 

                           : 
                           <>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/singup'}>Sing Up</Link></li>
                           </>
                        }
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;