import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='bg-violet-100'>
            <div className='container'>
                <div className='header-logo'>
                    <h1 className=''>BDJobs.com </h1>
                </div>
                <div className='link-area'>
                    <Link to={"/"} className='m-5'>Home</Link>
                    <Link to={"/statistics"} className='m-5'>Statistics</Link>
                    <Link to={"/appliedJobs"} className='m-5'>Applied Jobs</Link>
                    <Link to={"/blogs"} className='m-5'>Blogs</Link>
                </div>
                <div className='btn-apply'>
                    <button className='btn'>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;