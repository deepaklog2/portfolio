import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { theme } = useTheme();
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true to prevent initial render

  // Check if we're on the client-side and if it's a touch device
  useEffect(() => {
    setMounted(true);
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant("clicked");
    const mouseUp = () => setCursorVariant("default");
    
    const handleLinkHover = () => setCursorVariant("hover");
    const handleLinkLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    // Delay interaction event binding to ensure DOM is fully loaded
    setTimeout(() => {
      const links = document.querySelectorAll("a, button, .interactive");
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHover);
        link.addEventListener("mouseleave", handleLinkLeave);
      });
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      
      const links = document.querySelectorAll("a, button, .interactive");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  // Don't render custom cursor until component is mounted and not on touch devices
  if (!mounted || isTouchDevice) {
    return null;
  }

  const defaultCursorClass = "border-2 border-teal-500 dark:border-teal-400 bg-transparent";
  const hoverCursorClass = "bg-teal-500/20 dark:bg-teal-400/20";
  const clickedCursorClass = "bg-purple-500/50 dark:bg-purple-400/50";

  return (
    <motion.div
      className={`fixed top-0 left-0 rounded-full z-[9999] pointer-events-none ${
        cursorVariant === "default" 
          ? defaultCursorClass 
          : cursorVariant === "hover" 
            ? hoverCursorClass 
            : clickedCursorClass
      }`}
      animate={{
        x: mousePosition.x - (cursorVariant === "hover" ? 16 : 12),
        y: mousePosition.y - (cursorVariant === "hover" ? 16 : 12),
        height: cursorVariant === "hover" ? 32 : 24,
        width: cursorVariant === "hover" ? 32 : 24,
      }}
      transition={{
        type: "spring",
        mass: 0.6
      }}
    />
  );
}
