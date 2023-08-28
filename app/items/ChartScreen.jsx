"use client";

import { cn } from "@/lib/utils";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    pk: 1,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    pk: 1,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    pk: 1,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    pk: 1,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    pk: 1,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    pk: 1,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    pk: 1,
  },
];

const getPath = (x, y, width, height, scale) => {



  return `
  M${x} ${100}l-20,-50l20,-50l20,50l-20,50z`;
};

const TriangleBar = (props) => {
  console.log(props)
  const { fill, x, y, width, height,  } = props;

  const initHeight = 100
  const dataHeight = height
  // const scale = dataHeight/initHeight
  const scale = 1

  return <path style={{transform: `scale(${scale})`}} className="origin-bottom"  d={getPath(x, y, width, height, scale)} stroke="none" fill={fill} />;
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
          dataKey="pk"
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
