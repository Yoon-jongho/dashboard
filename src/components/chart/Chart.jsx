import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (data) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data.data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="pv" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          {/* <YAxis dataKey="Active User" stroke="#5550bd" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
