import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
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
        <Line type="monotone" dataKey="total" stroke="#adfa1d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  // ... other months ...
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];