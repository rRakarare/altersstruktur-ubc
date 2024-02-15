"use client";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, LabelList, Label } from "recharts";
import { getBar, getDynBar, getMaskD, getShapeD } from "@/lib/pathCreate";
import { useUbcStore } from "@/lib/store";



const PersonBar = (props) => {

  const {uniqs, ySpan} = useUbcStore() 

  const { x, y, width, height, vals } = props; 

  console.log({ height,yspan:ySpan[1], fullHeight: height*ySpan[1] })
  

  const initHeight = 92;
  const dataHeight = height;
  const scale = dataHeight / initHeight;


  return (

      vals.length > 0 && vals.map((item, index) => (
        <g key={index}>
          <path
            d={getBar(x, y, width, height, scale, index)} 
            stroke="none"
            opacity={0.25}
            fill={uniqs.find(uniq => uniq.name === item.pivot).color}
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

const RenderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;

  const {dataLabel} = useUbcStore()

  

  const position = value.length

  const vks = value.map(item => item.vk)
  const vk = vks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);


  if (position === 0 || !dataLabel.visible) {
    return
  }

  console.log({value})

  const radius = 14;

  return (
    <g>
      <circle cx={x + width / 2} cy={(y+height-height*position - radius-3)} r={radius} fill="#FFFFFF" stroke="#515151" />
      <text x={x + width / 2} y={(y+height-height*position - radius/3*2-3)} fill="#282828" fontWeight={dataLabel.weight*100} fontSize={dataLabel.size} textAnchor="middle">
        {(Math.round(vk * 10) / 10).toString().replace(".",",")}
      </text>
    </g>
  );
};

export function ChartScreen() {

  const { chartData, ySpan, graphHeight } = useUbcStore(); 



  return (
    <div className="container flex justify-center mt-10">
      <BarChart
        id="chartSvg"
        width={1600}
        height={graphHeight} 
        data={chartData}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 13,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        <Bar width={400} dataKey="pk" fill="#72718a" shape={<PersonBar />}>
        <LabelList dataKey="vals" content={RenderCustomizedLabel} />
          </Bar>     

        <YAxis type="number" domain={ySpan} tickCount={ySpan[1]+1} label={{ value: 'Mitarbeiter', angle: -90, position: 'center', }}/>
        <XAxis dataKey="name" tickCount={chartData.length}>
        <Label value="Alter" offset={-10} position="insideBottom" />
        </XAxis>
      </BarChart>
    </div>
  );
}
