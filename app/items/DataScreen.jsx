"use client";

import { useUbcStore } from "@/lib/store";
import { useEffect } from "react";
import { ChartScreen } from "./ChartScreen";
import  SettingComp  from "./SettingComp";
import NoSSR from "@/components/NoSSR";

function DataScreen() {
  const { isDone, chartData, setChartData, data } = useUbcStore();

  useEffect(() => {
    setChartData(20, 50, true);
  }, [data]);


  if (!isDone) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-14">
      <div className="w-full"> 
      <NoSSR>
        <ChartScreen />
      </NoSSR>
      </div>
      <SettingComp />
    </div>
  );
}

export default DataScreen;
