import React from 'react';
import { PieChart, Pie, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar, } from 'recharts';

const Statistics = () => {
    const data = [
        { name: "Assignment-1", marks: 60 },
        { name: "Assignment-2", marks: 59 },
        { name: "Assignment-3", marks: 45 },
        { name: "Assignment-4", marks: 53 },
        { name: "Assignment-5", marks: 58 },
        { name: "Assignment-6", marks: 54 },
        { name: "Assignment-7", marks: 60 }
    ]
    return (
        <div>
            <div className='text-center mt-14 '>
                <h2 className='text-2xl font-bold'>Pie Chart and Radar Chart</h2>
            </div>
            <div className='flex sm:flex-col md:flex-row justify-center items-center'>
            <PieChart width={400} height={400} >
                <Pie
                    dataKey="marks"
                    isAnimationActive={true}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>

            <RadarChart cx={200} cy={200} outerRadius={80} width={400} height={400} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <Radar dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip />
            </RadarChart>

        </div>
        </div>
    );
};

export default Statistics;

// import React from 'react';
// import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';

// const Statistics = () => {
//     const data = [
//         { name: "Assignment-1", value: 60 },
//         { name: "Assignment-2", value: 59 },
//         { name: "Assignment-3", value: 45 },
//         { name: "Assignment-4", value: 53 },
//         { name: "Assignment-5", value: 58 },
//         { name: "Assignment-6", value: 54 },
//         { name: "Assignment-7", value: 60 }
//     ];

//     return (
//         <div className='flex justify-center'>
//             <RadarChart cx={200} cy={200} outerRadius={150} width={400} height={400} data={data}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="name" />
//                 <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//                 <Tooltip />
//             </RadarChart>
//         </div>
//     );
// };

// export default Statistics;
