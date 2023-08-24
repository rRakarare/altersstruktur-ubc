"use client";

import Selector from "@/components/Selector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useUbcStore } from "@/lib/store";
import { useEffect, useState } from "react";

const ColumnChooser = ({ columns }) => {
  const { columnMap, setData } = useUbcStore();

  const [isMapped, setIsMapped] = useState()

  useEffect(() => {
    const keys = Object.keys(columnMap)
    setIsMapped(!keys.some(key => columnMap[key] === null))


  }, [columnMap]);

  const items = columns.map((item) => ({ value: item, label: item }));

  return (
    <>
      <div className="flex flex-col w-full max-w-sm gap-y-4 mt-4">
        <Label>Spaltenzuordnung</Label>
        <div className="flex flex-col gap-y-2 justify-between items-center w-full max-w-sm">
          <Selector ident="alter" placeholder="Alter" items={items} />
          <Selector ident="vk" placeholder="VK-Wert" items={items} />
          <Selector ident="pivot" placeholder="Pivot nach" items={items} />
        </div>
      </div>
      {isMapped && <Button onClick={()=>setData()} variant={"outline"} className="w-full max-w-sm">
        Go
      </Button>}
    </>
  );
};

export default ColumnChooser;
