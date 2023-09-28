"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useUbcStore } from "@/lib/store";

function YSetting() {

    const {dataLabel, setDataLabel} = useUbcStore()

    const [switchT, setSwitch] = useState(false)



  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Switch checked={dataLabel.visible} onCheckedChange={()=>setDataLabel({...dataLabel, visible:!dataLabel.visible})} id="airplane-mode" />
        <Label className="w-full">Datalabel</Label>
      </div>
      <div className="flex space-x-2">
        <div>
        <Label className="text-xs">fontsize</Label>
        <Input disabled={!dataLabel.visible} value={dataLabel.size} onChange={(e) => setDataLabel({...dataLabel, size:Number(e.target.value)})} type="number" className="max-w-[60px]" />
        </div>
        <div>
        <Label className="text-xs">fontweight</Label>
        <Input disabled={!dataLabel.visible} value={dataLabel.weight} onChange={(e) => setDataLabel({...dataLabel, weight:Number(e.target.value)})} type="number" className="max-w-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default YSetting;
