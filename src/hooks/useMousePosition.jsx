import { useState, useEffect } from 'react';

const useMousePosition = (element) => {
  const [mousePosition, setMousePosition] = useState({
    top: 0,
    left: 0,
    offsetTop: 0,
    offsetLeft: 0,
  });

  useEffect(() => {
    const currentElement = element.current;

    if (currentElement) {
      const updateMousePosition = (e) => {
        setMousePosition({
          top: e.pageY ?? 0,
          left: e.pageX ?? 0,
          offsetTop: currentElement.offsetTop,
          offsetLeft: currentElement.offsetLeft,
        });
      };

      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }
  }, [element]);

  return mousePosition;
};

export default useMousePosition;
