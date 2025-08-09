// DolphinFollower.jsx
import React, { useEffect, useRef } from "react";
import "./DolphinFollower.css";

export default function DolphinFollower({ active }) {
  const dolphinRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const dolphinPos = useRef({ x: mousePos.current.x, y: mousePos.current.y });

  useEffect(() => {
    if (!active) return; // stop animation if not active

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      dolphinPos.current.x += (mousePos.current.x - dolphinPos.current.x) * 0.1;
      dolphinPos.current.y += (mousePos.current.y - dolphinPos.current.y) * 0.1;

      if (dolphinRef.current) {
        dolphinRef.current.style.left = dolphinPos.current.x + "px";
        dolphinRef.current.style.top = dolphinPos.current.y + "px";
      }

      if (active) requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  if (!active) return null;

  return <img ref={dolphinRef} src="/images/dolphin.png" alt="dolphin" className="dolphin-follower" />;
}
