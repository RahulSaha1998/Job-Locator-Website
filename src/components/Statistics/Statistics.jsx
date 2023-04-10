import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
    const data = [
        { name: "Assignment-1", value: 60 },
        { name: "Assignment-2", value: 59 },
        { name: "Assignment-3", value: 45 },
        { name: "Assignment-4", value: 54 },
        { name: "Assignment-5", value: 56 },
        { name: "Assignment-6", value: 58 },
        { name: "Assignment-7", value: 57 }
    ]
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default Statistics;

