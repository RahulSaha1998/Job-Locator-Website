import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const appliedData = useLoaderData();
    console.log(appliedData);

    return (
        <div>
            <div>
                <div className='text-center mt-20'>
                    <h2 className='text-3xl font-bold'>Applied Jobs: {appliedData.length}</h2>
                </div>
                <div>
                    {
                        appliedData.map(job => console.log(job))
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;