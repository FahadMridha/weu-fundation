import React from 'react';
import { NavLink } from "react-router-dom";

import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Searchbar from './Searchbar';

const Navigation = () => {

    const [globalUser] = useAuthState(auth);
    const user = globalUser;

    const handleSignOut = () => {
        signOut(auth);

    }

    const activeStyle = 'flex items-center px-4 -mb-1 border-b-2   text-black  border-violet-100'
    const normalLink = 'flex items-center px-4 -mb-1 border-b-2 '


    return (

        <header className="p-4  text-gray-100 bg-transparent">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? activeStyle : normalLink
                    }
                >
                    Community
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">

                    <li className="flex">
                        <Searchbar></Searchbar>

                    </li>



                    <NavLink
                        to="/login"
                        className="mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        login
                    </NavLink>


                </ul>

                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6  text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* <div className="items-center flex-shrink-0 hidden lg:flex">


                    <NavLink className='text-white'>{user?.email} </NavLink>

                    {
                        user ?
                            <button onClick={handleSignOut} className='text-white px-2 mx-2 border-l-2  '> Log out  </button>
                            :
                            <NavLink className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900" to="/login">Log In</NavLink>
                    }



                </div> */}

            </div>
        </header >

    );
};

export default Navigation;