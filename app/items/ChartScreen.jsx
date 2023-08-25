"use client";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  // return `M${x} ${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  // ${x + width / 2}, ${y}
  // C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  // Z`;

  return `
  m${x+42} ${(y + -90 + height)}c0 3.4009-1.5762 6.3854-3.9474 8.0702v0.4132s8.5084 2.7854 9.0903 3.3175c0.0547 0.05 0.1073 0.0978 0.1581 0.144 0.4903 0.4461 0.8151 0.7417 1.231 1.3346 0.5654 0.8059 1.0821 2.3036 1.0821 2.3036l2.1106 7.5821s1.2922 3.5582 1.8542 5.921v-38.61h-40v38.61c0.56196-2.3628 1.8542-5.921 1.8542-5.921l2.1106-7.5821s0.51675-1.4977 1.0821-2.3036c0.41589-0.5929 0.74074-0.8885 1.231-1.3346 0.05081-0.0462 0.1034-0.094 0.15805-0.144 0.58198-0.5321 9.0904-3.3175 9.0904-3.3175v-0.4132c-2.3712-1.6848-3.9474-4.6693-3.9474-8.0702 0-5.2599 3.7703-9.5238 8.4211-9.5238s8.4211 4.264 8.4211 9.5238zm-28.421 49.86v40.616h40v-40.616s0 3.0812-3.8158 3.0812-3.8158-3.0812-3.8158-3.0812v-17.606l-1.0526-3.7348v59.996s0 1.9608-3.8038 1.9608-3.8038-1.9608-3.8038-1.9608l-3.4211-38.095h-0.5742l-3.4211 38.095s0 1.9608-3.8038 1.9608c-3.8038 0-3.8038-1.9608-3.8038-1.9608v-59.996l-1.0526 3.7348v17.606s0 3.0812-3.8158 3.0812-3.8158-3.0812-3.8158-3.0812z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export function ChartScreen() {
  return (
    <div className="container flex justify-center mt-10">
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
