import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Phone', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Laptop', uv: 300, pv: 2210, amt: 2290 },
  { name: 'Watch', uv: 200, pv: 2290, amt: 2000 },
  
];

const Statistic = () => (
 <div className='flex justify-center'>
     <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
 </div>
);

export default Statistic;
