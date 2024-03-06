"use client";

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    date: "2023-01-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-02-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-03-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-04-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-05-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-06-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-07-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-08-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-09-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-10-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-11-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-12-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#adfa1d" />
      </LineChart>
    </ResponsiveContainer>
  );
}