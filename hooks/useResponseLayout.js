import React, {useEffect, useState} from 'react';
import theme from "@styles/theme";

const UseResponseLayout = (
  size = theme?.deviceSizes.tablet.replace("px", ""),
) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const init = () => {
      const mobileSize = size ? size : theme?.deviceSizes.tablet.replace("px", "");
      if(Number.parseInt(mobileSize) > window.innerWidth) {
        setIsMobile(true);
      }else {
        setIsMobile(false);
      }
    };
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return isMobile;
};

export default UseResponseLayout;