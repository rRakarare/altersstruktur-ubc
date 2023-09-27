"use client"

import PivotTable from "./ScreenComponents/PivotTable"
import ExportSvg from "./ScreenComponents/ExportSvg"
import XSetting from "./ScreenComponents/XSetting"
import YSetting from "./ScreenComponents/YSetting"
import DataHeight from "./ScreenComponents/DataHeight"
import ToolTip from "./ScreenComponents/ToolTip"

function SettingComp() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 border-accent border-2 p-2">
      <PivotTable />
      </div>
      <div className="border-accent flex flex-col gap-y-2 border-2 p-2">
      <XSetting/>
      
      <YSetting/>
      
      <DataHeight/>
      {/* <ToolTip/> */}
      <ExportSvg />
      </div>
      
    </div>
  )
}

export default SettingComp