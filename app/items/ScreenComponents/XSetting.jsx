"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useUbcStore } from "@/lib/store";

function XSetting() {

    const {setChartData} = useUbcStore()

    const [switchX, setSwitchX] = useState(false)
    const [xmin, setXmin] = useState(0)
    const [xmax, setXmax] = useState(80)

    useEffect(() => {

        
        if (xmin >= xmax && switchX) {
            return () => {}
        }


        setChartData(xmin, xmax, !switchX);
      }, [switchX, xmin, xmax]);


  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Switch checked={switchX} onCheckedChange={()=>setSwitchX(state=>!state)} id="airplane-mode" />
        <Label className="w-full">Custom X-Axis</Label>
      </div>
      <div className="flex space-x-2">
        <Input disabled={!switchX} value={xmin} onChange={(e) => setXmin(Number(e.target.value))} type="number" className="max-w-[60px]" />
        <Input disabled={!switchX} value={xmax} onChange={(e) => setXmax(Number(e.target.value))} type="number" className="max-w-[60px]" />
      </div>
    </div>
  );
}

export default XSetting;
