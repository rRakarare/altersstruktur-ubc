"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useUbcStore } from "@/lib/store";

function YSetting() {

    const {setYSpan} = useUbcStore()

    const [switchY, setSwitchY] = useState(false)
    const [ymin, setYmin] = useState(0)
    const [Ymax, setYmax] = useState(1)

    useEffect(() => {

      if (!switchY || ymin >= Ymax) {
        setYSpan(null)
      } else {
        setYSpan([ymin, Ymax]);
      }



        

      }, [switchY, ymin, Ymax]);


  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Switch checked={switchY} onCheckedChange={()=>setSwitchY(state=>!state)} id="airplane-mode" />
        <Label className="w-full">Custom Y-Axis</Label>
      </div>
      <div className="flex space-x-2">
      <div>
      <Label className="text-xs">Ymin</Label>
        <Input disabled={!switchY} value={ymin} onChange={(e) => setYmin(Number(e.target.value))} type="number" className="max-w-[60px]" />
      </div>
        <div>
        <Label className="text-xs">Ymax</Label>
        <Input disabled={!switchY} value={Ymax} onChange={(e) => setYmax(Number(e.target.value))} type="number" className="max-w-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default YSetting;
