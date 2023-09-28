"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useUbcStore } from "@/lib/store";

function XSetting() {
  const { setGraphHeight, graphHeight, dataHeight, setDataHeight, ySpan } =
    useUbcStore();

  const [switchH, setSwitchH] = useState(true);

  useEffect(() => {
    if (switchH) {
      const fullHeight = ySpan[1] * dataHeight;

      setGraphHeight(fullHeight + 75);
    }
  }, [switchH, dataHeight, ySpan]);

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Switch
          checked={switchH}
          onCheckedChange={() => setSwitchH((state) => !state)}
          id="airplane-mode"
        />
        <Label className="w-full">Fixed data height</Label>
      </div>
      <div className="flex space-x-2">
        {switchH ? (
          <div>
            <Label className="text-xs">data height</Label>
            <Input
              value={dataHeight}
              onChange={(e) => setDataHeight(Number(e.target.value))}
              type="number"
              className="max-w-[130px]"
            />
          </div>
        ) : (
          <div>
            <Label className="text-xs">graph height</Label>

            <Input
              value={graphHeight}
              min={100}
              onChange={(e) => setGraphHeight(Number(e.target.value))}
              type="number"
              className="max-w-[130px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default XSetting;
