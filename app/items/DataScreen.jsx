"use client";

import { useUbcStore } from "@/lib/store";
import { useEffect } from "react";

function DataScreen() {
  const { isDone, uniqs } = useUbcStore();

  useEffect(() => {
    console.log(uniqs)
  }, [uniqs])
  

  if (!isDone) {
    return null;
  }

  return <div>DataScreen</div>;
}

export default DataScreen;
