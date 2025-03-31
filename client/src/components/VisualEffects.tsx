import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export function VisualEffects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only render the effects after component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Scanline effect */}
      <div className="scanline animate-scanline"></div>
      
      {/* Grain effect */}
      <div className="grain"></div>
    </>
  );
}
