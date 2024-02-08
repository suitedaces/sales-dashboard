import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    date: "2023-01-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "2023-02-01",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  // ... (other months follow the same pattern)
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
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
