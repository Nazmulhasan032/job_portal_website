import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";



const data = [
    {
        subject: 'Assignment-1',
        A: 56,
        fullMark: 60,
    },
    {
        subject: 'Assignment-2',
        A: 58,
        fullMark: 60,
    },
    {
        subject: 'Assignment-3',
        A: 57,
        fullMark: 60,
    },
    {
        subject: 'Assignment-4',
        A: 52,
        fullMark: 60,
    },
    {
        subject: 'Assignment-5',
        A: 60,
        fullMark: 60,
    },
    {
        subject: 'Assignment-6',
        A: 60,
        fullMark: 60,
    },
    {
        subject: 'Assignment-7',
        A: 60,
        fullMark: 60,
    },
    {
        subject: 'Assignment-8',
        A: 60,
        fullMark: 60,
    },
];



const Statistics = () => {
    return (
        <>
        <div>
            <h1 className='text-center text-2xl font-bold py-8'>My Assignment Mark Statistics</h1>
        </div>
            <div className='ml-96'>
                <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={1000}
                    height={1000}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Mike"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </div>
        </>
    );
};

export default Statistics;