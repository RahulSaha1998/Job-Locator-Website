import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAppliedJobs from '../DisplayAppliedJobs/DisplayAppliedJobs';

const AppliedJobs = () => {
    const appliedData = useLoaderData();
    // console.log(appliedData);

    const [applied, setAppliedData] = useState(appliedData);
    const [data, setData] = useState([])
    const [data1, setData1] = useState([]);

    const handleButton = () =>{
        setAppliedData(appliedData);
        console.log(applied);
    }

    const clickButton = () =>{
        setData('remote')
        console.log(data);
    }

    useEffect(()=>{
        const remote = appliedData.filter(dt => dt.remote_or_onsite == data);
        setData1(remote);
        console.log(data1);
    },[appliedData])

    return (
        <div>
            <div>
                <div className='text-center mt-12'>
                    <h2 className='text-3xl font-bold'>Applied Jobs</h2>
                    <div className='md:text-center lg:text-end lg:mr-96 m-5'>
                        <button className='btn btn-info mx-2' onClick={clickButton}>Remote</button>
                        <button className='btn btn-info'>Onsite</button>
                    </div>
                </div>
                <div className='mt-5 lg:mx-20'>
                    {
                        appliedData.map(job => <DisplayAppliedJobs
                            key={job.id}
                            job={job}
                        ></DisplayAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;






///////////3rd Step

// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import DisplayAppliedJobs from '../DisplayAppliedJobs/DisplayAppliedJobs';

// const AppliedJobs = () => {
//     const appliedData = useLoaderData();
//     const [filteredData, setFilteredData] = useState(appliedData); // State to track filtered data

//     // Function to handle button click
//     const handleButtonClick = (option) => {
//         const filteredJobs = appliedData.filter(job => job.remote_or_onsite.target.value === option);
//         setFilteredData(filteredJobs);
//     }

//     return (
//         <div>
//             <div>
//                 <div className='text-center mt-12'>
//                     <h2 className='text-3xl font-bold'>Applied Jobs</h2>
//                 </div>
//                 <div className='mt-5 mx-20'>
//                     <div className='flex justify-center space-x-5'>
//                         <button
//                             className='border px-4 py-2 rounded-full bg-blue-500 text-white'
//                             onClick={() => handleButtonClick('remote')}
//                         >
//                             Remote
//                         </button>
//                         <button
//                             className='border px-4 py-2 rounded-full bg-blue-500 text-white'
//                             onClick={() => handleButtonClick('onsite')}
//                         >
//                             Onsite
//                         </button>
//                     </div>
//                     {filteredData.map(job => (
//                         <DisplayAppliedJobs key={job.id} job={job} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AppliedJobs;














