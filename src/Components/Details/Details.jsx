import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDB } from '../../Utilities/fakeDB';

const Details = () => {
    const dynamic = useParams()

    const [detail, SetDetail] = useState({});
    useEffect(() => {
        fetch(`/JobData.json`)
            .then(res => res.json())
            .then(data => {
                const selectedData = data.find(item => item.id === dynamic.detailId);
                SetDetail(selectedData);

            })}, [])

            const handleAddCart = id =>{
                addToDB(id);
            }



        return (
            <>
                <div className='bg-violet-100'>
                    <div className='job-container'>
                        <div className='text-center'>
                            <h1 className='text-2xl font-bold py-16'>Job Details</h1>
                        </div>
                    </div>
                </div>
                <div className='job-container pb-24'>
                    <div className='flex gap-4'>
                        <div className='w-3/5'>
                            <p className='mb-5 pt-24'><span className='font-bold'>Job Description: </span>{detail.job_description} </p>
                            <p className='mb-5'><span className='font-bold'>Job Responsibility: </span>{detail.job_responsibilities} </p>
                            <p className='mb-5'><span className='font-bold'>Educational Requirements: </span> <br /> {detail.educational_requirement} </p>
                            <p><span className='font-bold'>Experiences: </span> <br />{detail.experience}</p>
                        </div>
                        <div>
                            <div className='bg-violet-100 rounded-md mt-24'>
                                <div className='p-4'>
                                    <h1 className='font-bold'>Job Details</h1>
                                    <hr className='pb-3' />
                                    <p><span className='font-bold'>Salary: </span>{detail.salary}(Per Month)</p>
                                    <p><span className='font-bold'>Job Title: </span>{detail.job_title}</p>
                                    <h1 className='font-bold pt-4'>Contact Information </h1>
                                    <hr className='pb-2' />
                                    <p><span className='font-bold'>Phone: </span>{detail.phone}</p>
                                    <p><span className='font-bold'>Email: </span>{detail.email}</p>
                                    <p><span className='font-bold'>Address: </span>{detail.address}</p>
                                </div>
                            </div>
                            <button onClick={()=> handleAddCart(detail.id)} className='btn mt-3 w-full text-white'>Apply Now</button>
                        </div>
                    </div>
                </div>

            </>
        );
    };

    export default Details;
































