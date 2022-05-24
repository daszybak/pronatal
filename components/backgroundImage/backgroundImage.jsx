import {useEffect, useState} from 'react';
import Image from 'next/image';

const getWindowDimensensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
};

const BackgroundImage = ({url}) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const {width, height} = getWindowDimensensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const {width, height} = getWindowDimensensions();
      setHeight(height);
      setWidth(width);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);

  if (width && height) {
    <Image src={url} width={width} height={height} />;
  }

  return null;
};

export default BackgroundImage;
