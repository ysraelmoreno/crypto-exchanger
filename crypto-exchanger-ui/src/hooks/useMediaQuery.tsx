import { useEffect, useState } from "react";

interface IUseMediaQuery {
  sm?: string;
}

function useMediaQuery({ sm }: IUseMediaQuery) {
  const [isWithinTheResolution, setIsWithinTheResolution] = useState(false);
  const [size, setSize] = useState(window.screen.width);

  useEffect(() => {
    const onResize = () => {
      setSize(document.body.clientWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (sm) {
      const [condition, value] = sm.split(":");

      if (condition === "max-width") {
        const valueReplaced = value.replaceAll(/[a-z]/gm, "");

        setIsWithinTheResolution(size <= Number(valueReplaced));
      }

      if (condition === "min-width") {
        const valueReplaced = value.replaceAll(/[a-z]/gm, "");

        setIsWithinTheResolution(size >= Number(valueReplaced));
      }
    }
  }, [window.screen.width, size]);

  return isWithinTheResolution;
}

export default useMediaQuery;
