"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Selector from "@/components/Selector";
import ColumnChooser from "./ColumnChooser";
import { useUbcStore } from "@/lib/store";

function DataDrop() {
  const { isDone, data } = useUbcStore();


  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      {isDone ? <ResetData /> : <SelectData />}
    </div>
  );
}

const SelectData = () => {
  const { toast } = useToast();

  const { setRawData } = useUbcStore();

  const [columns, setColumns] = useState();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const type = file.name.split(".").pop();

    if (type !== "xlsx") {
      toast({
        variant: "destructive",
        title: "Falsches Dateiformat",
        description: "Nur XLSX zugelassen",
      });

      return;
    }

    const data = await file.arrayBuffer();
    /* data is an ArrayBuffer */
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw_data = XLSX.utils.sheet_to_json(worksheet);

    setColumns(Object.keys(raw_data[0]));
    setRawData(raw_data);
  };

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label>Personaltabelle Excel</Label>
        <Input onChange={handleChange} id="Excel Datei" type="file" />
      </div>
      {columns && <ColumnChooser columns={columns} />}
    </>
  );
};

const ResetData = () => {

  const {reset} = useUbcStore()

  return <Button onClick={()=>reset()}>Reset</Button>;
};

export default DataDrop;
