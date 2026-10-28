"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", visits: 1200 },
  { day: "Tue", visits: 2100 },
  { day: "Wed", visits: 800 },
  { day: "Thu", visits: 1600 },
  { day: "Fri", visits: 2400 },
  { day: "Sat", visits: 3200 },
  { day: "Sun", visits: 2800 },
];

export default function Chart() {
  return (
    <div className="chartbox">
      <h2 style={{ marginTop: 0, color: "#1F4E78" }}>Weekly visits</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visits" stroke="#5b3ddb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
