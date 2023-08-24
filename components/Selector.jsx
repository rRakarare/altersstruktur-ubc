"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUbcStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useEffect } from "react";

function Selector({items, placeholder, className="", ident}) {


    const {columnMap, setColumnMap} = useUbcStore()

    useEffect(() => {
      console.log(columnMap)
    }, [columnMap])
    

  return (
    <>
    <div className="flex w-full items-center justify-between gap-3">
        <div>{placeholder}</div>
        <Select onValueChange={(val)=>setColumnMap(ident,val)}>
      <SelectTrigger className={cn(["max-w-[250px]", columnMap[ident] ? "bg-emerald-400" : "text-neutral-400"])}>
        <SelectValue placeholder={"Wählen"} />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
      </SelectContent>
    </Select>
    </div>

    </>
  );
}

export default Selector;
