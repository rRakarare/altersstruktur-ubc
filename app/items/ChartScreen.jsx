"use client";

import { cn } from "@/lib/utils";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getBar, getDynBar, getMaskD, getShapeD } from "@/lib/pathCreate";
import { useUbcStore } from "@/lib/store";

const colorMap = {
  MTA: "#0088FE",
  SERV: "#42c72aE",
};

const data = [
  {
    name: "60",
    vals: [
      { pivot: "MTA", vk: 0.4 },
      { pivot: "SERV", vk: 0.7 },
    ],
    pk: 1,
  },
  {
    name: "61",
    vals: [
      { pivot: "MTA", vk: 0.4 },
      { pivot: "SERV", vk: 0.7 },
    ],
    pk: 1,
  },
  {
    name: "62",
    vals: [
      { pivot: "MTA", vk: 0.4 },
      { pivot: "SERV", vk: 0.7 },
    ],
    pk: 1,
  },
  {
    name: "63",
    vals: [
      { pivot: "MTA", vk: 0.4 },
      { pivot: "SERV", vk: 0.7 },
      { pivot: "SERV", vk: 0.7 },
    ],
    pk: 1,
  },
  {
    name: "64",
    vals: [
      { pivot: "MTA", vk: 0.4 },
      { pivot: "SERV", vk: 0.7 },
    ],
    pk: 1,
  },
  {
    name: "65",
    vals: [
     
    ],
    pk: 1,
  },
  {
    name: "66",
    vals: [
      { pivot: "MTA", vk: 0.4 },
      { pivot: "SERV", vk: 0.7 },
    ],
    pk: 1,
  },
];

const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;

const TriangleBar = (props) => {

  const { fill, x, y, width, height, vals } = props;

  const {uniqs} = useUbcStore()

  const initHeight = 92;
  const dataHeight = height;
  const scale = dataHeight / initHeight;
  // const scale = 1



  return (
    <g>
      {vals && vals.map((item, index) => (
        <g key={index}>
          <path
            d={getBar(x, y, width, height, scale, index)}
            stroke="none"
            fill={setOpacity(uniqs.find(uniq => uniq.name === item.pivot).color, 0.4)}
          />
          <path
            d={getDynBar(x, y, width, height, scale, index, item.vk)}
            stroke="none"
            fill={uniqs.find(uniq => uniq.name === item.pivot).color}
          />
          <path
            d={getMaskD(x, y, width, height, scale, index)}
            stroke="none"
            fill={"white"}
          />
        </g>
      ))}
    </g>
  );
};

export function ChartScreen() {

  const { chartData } = useUbcStore();

  return (
    <div className="container flex justify-center mt-10">
      <BarChart
        width={800}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        <Bar dataKey="pk" fill="#72718a" shape={<TriangleBar />} />       

        <YAxis type="number" domain={[0, 3]} tickCount={4} />
        <XAxis dataKey="name"  />
      </BarChart>
    </div>
  );
}
