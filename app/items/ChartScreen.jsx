"use client";

import { cn } from "@/lib/utils";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colorMap = {
  "MTA": "#0088FE",
  "SERV": "#42c72aE",
}

const data = [
  {
    name: "60",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
  {
    name: "61",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
  {
    name: "62",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
  {
    name: "63",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
  {
    name: "64",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
  {
    name: "65",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
  {
    name: "66",
    vals: [{pivot:"MTA", vk: 0.4}, {pivot:"SERV", vk:0.7}],
    pk: 1,
  },
];

function scaleSvgPath(originalD, scalingFactor) {
  var pattern = /[-+]?\d*\.\d+|[-+]?\d+/g;

  function scaleValue(value) {
    return (parseFloat(value) * scalingFactor).toString();
  }

  var scaledD = originalD.replace(pattern, function (match) {
    return scaleValue(match);
  });

  return scaledD;
}

const getPath = (x, y, width, height, scale, shift) => {
  const d_raw =
    "h-10v20c0.637,-3.65,2.303,-7.959,4,-9c1.697,-1.041,4,-1.5,4,-1.5v-0.5c0,0,-2,-1,-2,-4c0,-3,1.499,-5,4,-5zm10,20v-20h-10c2.501,0,4,2,4,5c0,3,-2,4,-2,4v0.5c0,0,2.303,0.459,4,1.5c1.697,1.041,3.363,5.35,4,9zm0,11c0,0,0,1,-1.5,1c-1.5,0,-1.5,-1,-1.5,-1v-9c-0.578,-1.284,-2,-3,-2,-3v30c0,0,0,1,-1.5,1c-1.5,0,-1.5,-1,-1.5,-1l-2,-18l-2,18c0,0,0,1,-1.5,1c-1.5,0,-1.5,-1,-1.5,-1v-30c0,0,-1.422,1.716,-2,3v9c0,0,0,1,-1.5,1c-1.5,0,-1.5,-1,-1.5,-1v19h6.5h7h6.5v-19z";

  const d = `M${x + width / 2},${y - height * shift}${scaleSvgPath(
    d_raw,
    scale
  )}`;

  return d;
};

const TriangleBar = (props) => {
  console.log(props);

  const { fill, x, y, width, height, vals } = props;

  const initHeight = 50;
  const dataHeight = height;
  const scale = dataHeight / initHeight;
  // const scale = 1

  return (
    <g>
      {vals.map((item, index) => (
        <path
        d={getPath(x, y, width, height, scale, index)}
        stroke="none"
        fill={colorMap[item.pivot]}
      />
      ))}
      
    </g>
  );
};

export function ChartScreen() {
  return (
    <div className="container flex justify-center mt-10">
      <BarChart
        width={700}
        height={300}
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
        <YAxis type="number" domain={[0, 3]} tickCount={4} />
        <Bar dataKey="pk" fill="#72718a" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
}
