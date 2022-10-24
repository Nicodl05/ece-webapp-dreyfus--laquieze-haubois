import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <nav className='flex justify-between item-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
            <Link to='/' className="pl-8">
                Home
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to='/'>Home </Link>
                <Link className="p-4" to='/about'>About</Link>
                <Link className="p-4" to='/articles'>Articles </Link>
                <Link className="p-4" to='/contacts'>Contacts </Link>
            </div>

        </nav>
    );
}
export default NavBar;