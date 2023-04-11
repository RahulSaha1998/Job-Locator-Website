import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAppliedJobs from '../DisplayAppliedJobs/DisplayAppliedJobs';

const AppliedJobs = () => {
    const appliedData = useLoaderData();
    console.log(appliedData);

    return (
        <div>
            <div>
                <div className='text-center mt-12'>
                    <h2 className='text-3xl font-bold'>Applied Jobs</h2>
                </div>
                <div className='mt-5 mx-20'>
                    {
                        appliedData.map(job =><DisplayAppliedJobs
                        key={job.id}
                        job= {job}
                        ></DisplayAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;