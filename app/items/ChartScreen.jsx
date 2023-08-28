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
    "h-20v40c0,0,2.847,-14.721,6,-17c3.153,-2.279,9.5,-3,9.5,-3v-1c0,0,-4,-2,-4,-8c0,-6,2.5,-11,8.5,-11zm20,40c0,0,-2.847,-14.721,-6,-17c-3.153,-2.279,-9.5,-3,-9.5,-3v-1c0,0,4,-2,4,-8c0,-6,-2.5,-11,-8.5,-11h20v40zm0,22h-7.5v-18c-0.794,-1.662,-2.5,-4,-2.5,-4v60h10v-38zm-17,38l-3,-38l-3,38h6zm-13,0v-60c0,0,-1.706,2.338,-2.5,4v18l-3.75,3l-3.75,-3v38h10z";

  const d = `M${x + width / 2},${y - height * shift}${scaleSvgPath(
    d_raw,
    scale
  )}`;

  return d;
};

const TriangleBar = (props) => {
  console.log(props);

  const { fill, x, y, width, height, vals } = props;

  const initHeight = 100;
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
