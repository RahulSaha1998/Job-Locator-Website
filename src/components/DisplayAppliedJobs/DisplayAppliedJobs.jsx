import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAppliedJobs = ({ job }) => {
    const { company_logo, company_name, job_title, remote_or_onsite, salary, job_type, location, id } = job;
    return (
        <div>
            <div className="card card-compact w-6/12  h-full bg-slate-100 shadow-xl mx-auto m-5">
                <div className="card-body">
                    <div className='lg:grid grid-cols-3 justify-evenly items-center'>
                        <div className=' '>
                            <img className='w-full h-full rounded-lg' src={company_logo} alt="" />
                        </div>
                        <div className='lg:ml-5'>
                            <h2 className="card-title">{job_title}</h2>
                            <p>{company_name}</p>
                            <div className="card-actions mt-2">
                                <div className='flex my-2'>
                                    <button className="btn btn-outline btn-success mr-2">{job_type}</button>
                                    <button className="btn btn-outline btn-success">{remote_or_onsite}</button>
                                </div>
                                <section className=' gap-10'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <p>{location}</p>
                                    </div>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>{salary}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="card-actions lg:justify-end sm:mt-2">
                            {/* <button className='btn btn-info'>View Details</button> */}
                            <Link to={`/jobDetails/${id}`}><button className='btn btn-info'>View Details</button></Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DisplayAppliedJobs;