"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useUbcStore } from "@/lib/store";

function YSetting() {

    const {setYSpan} = useUbcStore()

    const [switchT, setSwitch] = useState(false)
    const [font, setFont] = useState(0)


    useEffect(() => {

       
      }, [switchT, font]);


  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Switch checked={switchT} onCheckedChange={()=>setSwitch(state=>!state)} id="airplane-mode" />
        <Label className="w-full">Toggle Label</Label>
      </div>
      <div className="flex space-x-2">
        <Input disabled={!switchT} value={font} onChange={(e) => setFont(Number(e.target.value))} type="number" className="max-w-[130px]" />
      </div>
    </div>
  );
}

export default YSetting;
