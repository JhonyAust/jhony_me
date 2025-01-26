import { useState, useEffect } from 'react';

const useResponsiveMode = () => {
  const [mode, setMode] = useState({
    isMobilePortrait: false,
    isMobileLandscape: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isMobile = width < 640; // Mobile breakpoint
      const isLandscape = width > height && height < 500; // Landscape mode based on aspect ratio

      setMode({
        isMobilePortrait: isMobile && !isLandscape,
        isMobileLandscape: isLandscape,
        isDesktop: !isMobile && width >= 640, // Ensure it's not mobile for desktop
      });
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mode;
};

export default useResponsiveMode;
