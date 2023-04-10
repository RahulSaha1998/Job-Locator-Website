import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';


const FeaturedJobs = ({ dt }) => {
    console.log(dt);
    const { company_logo, company_name, educational_requirements, experiences, job_description
        , job_responsibility, job_title, job_type, location, salary, remote_or_onsite } = dt;

    return (
        <div className='mt-5'>
            <div className="card card-compact w-full  h-full bg-slate-100 shadow-xl">
                <div className="card-body">
                    <img className='sm:w-2/6 md:w-1/6 rounded' src={company_logo} alt="" />
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-success">{job_type}</button>
                        <button className="btn btn-outline btn-success">{remote_or_onsite}</button>
                    </div>
                    <section className='flex gap-10'>
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
                    <div>
                        <button className="btn btn-info">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FeaturedJobs;