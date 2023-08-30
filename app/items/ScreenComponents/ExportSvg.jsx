"use client";

import downloadSVG from 'svg-crowbar';

import { Button } from "@/components/ui/button";

function ExportSvg() {

  const dlGraph = () => {
    const el = document.querySelector('#chartSvg')

    downloadSVG(el, 'my_svg', { css: 'internal' });

  }

  return (
    <Button onClick={()=>dlGraph()}>Export</Button>
  )
}

export default ExportSvg