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

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  if (!isDone) {
    return null;
  }

  return (
    <div>
      <NoSSR>
        <ChartScreen />
      </NoSSR>
      <SettingComp />
    </div>
  );
}

export default DataScreen;
