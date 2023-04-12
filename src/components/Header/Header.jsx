import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='card-normal md:flex md:justify-between md:items-center mx-10 shadow-xl p-5 rounded-xl bg-slate-100'>
            <div>
                <h2 className='font-bold text-2xl'>Job Locator</h2>
            </div>
            <div >
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/appliedJob'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <button className=" btn btn-info">Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;