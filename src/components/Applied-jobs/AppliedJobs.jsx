import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAppliedJobs from '../DisplayAppliedJobs/DisplayAppliedJobs';

const AppliedJobs = () => {
    const appliedData = useLoaderData();
    const [filteredData, setFilteredData] = useState(appliedData);
    const handleFilter = (filter) => {
            const filtered = appliedData.filter(job => job.remote_or_onsite === filter);
            setFilteredData(filtered);
        
    }

    const handleFilter2 = () =>{
        setFilteredData(appliedData)
    }

    return (
        <div>
            <div>
                <div className='text-center mt-12'>
                    <h2 className='text-3xl font-bold'>Applied Jobs</h2>
                    <div className='text-center  m-5'>
                        {/* Buttons for filtering */}
                        <button onClick={() => handleFilter('Remote')} className='mr-2 btn btn-info'>Remote</button>
                        <button className='btn btn-info' onClick={() => handleFilter('Onsite')}>OnSite</button>
                        <button className='ml-2 btn btn-info' onClick={handleFilter2}>All Data</button>
                    </div>
                </div>
                <div className='mt-5 lg:mx-20'>
                    {
                        filteredData.map(job => (
                            <DisplayAppliedJobs
                                key={job.id}
                                job={job}
                            ></DisplayAppliedJobs>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;















