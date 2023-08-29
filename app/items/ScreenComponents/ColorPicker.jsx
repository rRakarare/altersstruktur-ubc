"use client";
import { Button } from "@/components/ui/button";
import { useUbcStore } from "@/lib/store";
import { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker({init, pivot}) {

  const [color, setColor] = useState(init)
  const {changeColor} = useUbcStore()

  const handleChange = (col) => {
    setColor(col)
  }

  return (
    <>
      <SketchPicker color={color} onChange={(cs)=>handleChange(cs)} />
      <Button className="w-full" variant={"outline"} onClick={()=>changeColor(pivot,color.hex)}>Apply</Button>
    </>
  );
}

export default ColorPicker;
