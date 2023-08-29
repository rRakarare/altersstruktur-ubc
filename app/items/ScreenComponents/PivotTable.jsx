"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import ColorPicker from "./ColorPicker"

import { useUbcStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const sumArray = (array) => {
  let sum = array.reduce(function (a, b) {
    return a + b;
  });

  return sum;
};

function PivotTable() {
  const { data, uniqs } = useUbcStore();

  console.log("data", data);
  console.log("uniqs", uniqs);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Pivot</TableHead>
          <TableHead>Anzahl</TableHead>
          <TableHead>VK</TableHead>
          <TableHead>Ø Alter</TableHead>
          <TableHead className="text-right">Color</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {uniqs.map((uniq) => {
          const items = data.filter((u) => u.pivot === uniq.name);

          const count = items.length;
          const ageSum = sumArray(items.map((item) => item.alter));
          const vk = sumArray(items.map((item) => item.vk));


          return (
            <TableRow key={uniq.name}>
              <TableCell className="font-medium">{uniq.name}</TableCell>
              <TableCell>{count}</TableCell>
              <TableCell>{vk}</TableCell>
              <TableCell>{(ageSum / count).toFixed(1)}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <Button className="w-1 h-6" style={{ background: uniq.color }} />
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border shadow-none flex flex-col items-center justify-center min-w-0 w-full">
                  
                    <ColorPicker init={uniq.color} pivot={uniq.name} />
                    
                  
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default PivotTable;
