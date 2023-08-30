"use client";

import { cn } from "@/lib/utils";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getBar, getDynBar, getMaskD, getShapeD } from "@/lib/pathCreate";
import { useUbcStore } from "@/lib/store";


const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;

const PersonBar = (props) => {

  const { x, y, width, height, vals } = props;

  console.log(props)

  const {uniqs} = useUbcStore()

  const initHeight = 92;
  const dataHeight = height;
  const scale = dataHeight / initHeight;


  return (

      vals.length > 0 && vals.map((item, index) => (
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
      ))

  );
};

export function ChartScreen() {

  const { chartData } = useUbcStore();

  return (
    <div className="container flex justify-center mt-10">
      <BarChart
        id="chartSvg"
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
        
        <Bar width={400} dataKey="pk" fill="#72718a" shape={<PersonBar />} />       

        <YAxis type="number" domain={[0, 8]} tickCount={9} />
        <XAxis dataKey="name"  />
      </BarChart>
    </div>
  );
}
