import React, { useContext, useEffect, useState } from 'react';
import "./Home.css"
import image from "../../assets/image.png";
import { Link, useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const Home = () => {
    const allJobs = useLoaderData()   

    const [jobCategories, SetJobCategories] = useState([]);
    useEffect(() => {
        fetch("/jobCategory.json")
            .then(res => res.json())
            .then(data => SetJobCategories(data))
    }, []);

    const [numJobsToShow, setNumJobsToShow] = useState(4);

    const handleAllJobsClick = () => {
        setNumJobsToShow(allJobs.length);
    }
    return (
        <>
            {/* // ------------------logo area starts here-------------- */}
            <section className='bg-violet-100'>
                <div className='container'>
                    <div className='pt-5'>
                        <h1 className='font-medium text-4xl leading-relaxed'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                        <p className='my-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='btn'>Get Started</button>
                    </div>
                    <div >
                        <img className='person-image' src={image} alt="person" />
                    </div>
                </div>
            </section>
            {/* // --------------logo area ends here--------------------- */}
            {/* //    ------------------JOb category section start here---------- */}
            <section>
                <div className='job-container'>
                    <div className='text-center my-20'>
                        <h1 className='font-bold text-3xl my-8'>Job Category List</h1>
                        <p className=''>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 my-16'>
                        {
                            jobCategories.map(cart => (
                                <div key={cart.id} className='job-cart p-8'>
                                    <div className='job-image-container'>
                                        <img className='job-image' src={cart.logo} alt="" />
                                    </div>
                                    <h3 className='font-semibold text-xl pt-6'>{cart.name}</h3>
                                    <p>{cart.jobs_available} Jobs Available</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* //    ------------------JOb category section end here---------- */}


            {/* //    ------------------Feature job section start here---------- */}
            <section>
                <div className='job-container'>
                    <div className='my-20'>
                        <h1 className='text-center font-bold text-3xl my-8'>Feature Jobs</h1>
                        <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 my-16'>
                            {
                                allJobs.slice(0, numJobsToShow).map(job => (
                                    <div key={job.id} className='feature-cart  p-10'>
                                        <div>
                                            <img className='feature-job-img' src={job.company_logo} alt="logo" />
                                        </div>
                                        <h1 className='font-semibold text-lg my-1'>{job.job_title}</h1>
                                        <p className='my-1'>{job.company_name}</p>
                                        <button className='job-btn my-2'>{job.job_type}</button>
                                        <button className='job-btn my-2'>{job.job_duration}</button>
                                        <div className='flex gap-6'>
                                            <p className='my-1'>{job.location}</p>
                                            <p className='my-1'>Salary: {job.salary}</p>
                                        </div>
                                        <Link to={`/detail/${job.id}`}>
                                            <button className='btn my-2'>View Details</button>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* //    ------------------Feature job section end here---------- */}

            <div className='text-center'>
                <button onClick={()=>handleAllJobsClick()} className='btn mb-12'>See All Jobs</button>
            </div>
        </>

    );
};

export default Home;


















































