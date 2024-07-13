import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransactionGraph = ({ data }) => (
  <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="6 6" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip contentStyle={{ backgroundColor: "#f0f0f0", border: "none" }} />
        <Legend wrapperStyle={{ fontSize: "14px", marginBottom: "20px" }} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ stroke: "#8884d8", fill: "#8884d8", r: 5 }}
          activeDot={{ stroke: "#8884d8", strokeWidth: 2, r: 8 }}
        />
      </LineChart>
    </div>
);

export default TransactionGraph;