"use client"

import PivotTable from "./ScreenComponents/PivotTable"
import ExportSvg from "./ScreenComponents/ExportSvg"
import ChartSettings from "./ScreenComponents/ChartSettings"

function SettingComp() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 border-accent border-2 p-2">
      <PivotTable />
      </div>
      <div className="border-accent border-2 p-2">
      <ChartSettings/>
      </div>
      
    </div>
  )
}

export default SettingComp