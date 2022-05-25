import {useLayoutEffect, useState} from 'react';

const getWindowSize = () => {
  const {width, height} = window.screen;

  return {width, height};
};

const useResize = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useLayoutEffect(() => {
    const {width, height} = getWindowSize();
    setHeight(height);
    setWidth(width);

    const resize = () => {
      window.addEventListener('resize', () => {
        const {width, height} = getWindowSize();
        setHeight(height);
        setWidth(width);
      });
    };
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return {width, height};
};

export default useResize;
