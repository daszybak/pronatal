import {useState, useLayoutEffect} from 'react';

const useIntersection = (element, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const {current} = element;

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {rootMargin}
    );

    current && observer.observe(current);

    // return () => observer.unobserve(current);
  }, [current]);

  return isVisible;
};

export default useIntersection;
