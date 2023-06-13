import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../Utilities/fakeDB';
import "./AppliedJobs.css";

const AppliedJobs = () => {
    const jobData = useLoaderData();

    // State to keep track of selected job duration
    const [selectedJobDuration, setSelectedJobDuration] = useState('');

    let cart = []
    const savedCart = getStoredCart();
    for (const id in savedCart) {
        const foundItem = jobData.find(item => item.id === id)
        if (foundItem) {
            cart.push(foundItem);
        }
    }

    // Filter jobs based on selected job duration
    const filteredJobs = selectedJobDuration ? cart.filter(item => item.job_duration === selectedJobDuration) : cart;

    return (
        <>
            <div className='bg-violet-100'>
                <div className='job-container'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold py-16'>Applied jobs</h1>
                    </div>

                </div>

            </div>
            <div className='job-container pt-6'>
                <div className='text-right'>
                    {/* Full Time button */}
                    <button className={`btn ${selectedJobDuration === 'Full-Time' ? 'bg-blue-600 text-white' : ''}`} onClick={() => setSelectedJobDuration('Full-Time')}>Full Time</button>
                    {/* Part Time button */}
                    <button className={`btn ms-4 ${selectedJobDuration === 'Part-Time' ? 'bg-blue-600 text-white' : ''}`} onClick={() => setSelectedJobDuration('Part-Time')}>Part Time</button>
                </div>              
                {/* --------------job section start here------------- */}
                <div>
                    <section>
                        <div className='job-container'>
                            <div className='my-20'>
                                <div className='my-8'>
                                   {
                                    filteredJobs.map(item =>(
                                        <div className='grid grid-cols-2 justify-items-end items-center feature-cart p-5'>
                                        <div className='flex items-center'>
                                            <div >
                                                <img className='logo-images' src={item.company_logo} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-lg my-1'>Technical database Engineer</h1>
                                                <p className='my-1'>{item.company_name}</p>
                                                <button className='job-btn my-2'>{item.job_type}</button>
                                                <button className='job-btn my-2'>{item.job_duration}</button>
                                                <div className='flex gap-6'>
                                                    <p className='my-1'>{item.location}</p>
                                                    <p className='my-1'>Salary: {item.salary}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link>
                                                <button className='btn my-2'>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                    ))
                                   }
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                {/* --------------job section end here------------- */}
            </div>
        </>
    );
};
export default AppliedJobs;

