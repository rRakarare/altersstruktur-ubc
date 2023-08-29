function scaleSvgPath(originalD, scalingFactor) {
    var pattern = /[-+]?\d*\.\d+|[-+]?\d+/g;
  
    function scaleValue(value) {
      return (parseFloat(value) * scalingFactor).toString();
    }
  
    var scaledD = originalD.replace(pattern, function (match) {
      return scaleValue(match);
    });
  
    return scaledD;
  }


export const getMaskD = (x, y, width, height, scale, shift) => {
    const d_raw =
      "h-36v92h36v-92zm-25.556,10c0,-5.4,2.833,-9,7.556,-9c4.723,0,7.556,3.6,7.556,9c0,5.4,-3.778,7.2,-3.778,7.2v0.9c0,0,5.955,0.411,8.5,2.7c2.544,2.289,4.722,16.2,4.722,16.2v19.8c0,0,0,1.8,-2.833,1.8c-2.834,0,-2.834,-1.8,-2.834,-1.8v-16.2l-1.889,-9v57.6c0,0,0,1.8,-2.833,1.8c-2.833,0,-2.833,-1.8,-2.833,-1.8l-3.778,-32.4l-3.778,32.4c0,0,0,1.8,-2.833,1.8c-2.833,0,-2.833,-1.8,-2.833,-1.8v-57.6l-1.889,9v16.2c0,0,0,1.8,-2.834,1.8c-2.833,0,-2.833,-1.8,-2.833,-1.8v-19.8c0,0,2.178,-13.911,4.722,-16.2c2.544,-2.289,8.5,-2.7,8.5,-2.7v-0.9c0,0,-3.778,-1.8,-3.778,-7.2z";
  
    const d = `M${x + width/2 + 18*scale},${y - height * shift}${scaleSvgPath(
      d_raw,
      scale
    )}`;
  
    return d;
  };

export const getBar = (x, y, width, height, scale, shift) => {

    const d_raw =
      "h34v90h-34v-90z";
  
      const d = `M${x+1*scale + width/2 - 18*scale},${y+1*scale - height * shift}${scaleSvgPath(
        d_raw,
        scale
      )}`;
  
    return d;
  };
export const getDynBar = (x, y, width, height, scale, shift, vk) => {

    const hh = 90*vk

    const d_raw =
      `h34v-${hh}h-34v${hh}z`;
  
      const d = `M${x+1*scale + width/2 - 18*scale},${90*scale+ y+1*scale - height * shift}${scaleSvgPath(
        d_raw,
        scale
      )}`;
  
    return d;
  };