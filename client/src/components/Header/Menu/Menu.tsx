import { useState, useEffect } from 'react';
import { DesktopMenu } from '../DesktopMenu/DesktopMenu';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Menu = () => {
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{screenWidth > 900 ? <DesktopMenu /> : <MobileMenu />}</>;
};
