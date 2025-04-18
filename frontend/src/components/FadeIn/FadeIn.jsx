import { useEffect, useRef, useState } from "react";

function FadeIn({
  children,
  isHorizontal = false,
  movementAmt = "20%",
  duration = "1s",
  threshold = 0.1,
}) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold, // Controls when animation should trigger (e.g., 10% visible)
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const endPos = isHorizontal
    ? `translateX(${movementAmt})`
    : `translateY(${movementAmt})`;
  const fadeInStyle = {
    opacity: 0,
    transform: endPos,
    transition: `all ${duration} ease-out`,
    willChange: "transform, opacity",
  };

  const initialPos = isHorizontal ? "translateY(0)" : "translateX(0)";
  const visibleStyle = {
    opacity: 1,
    transform: initialPos,
  };

  return (
    <div
      style={
        isVisible ? { ...fadeInStyle, ...visibleStyle } : { ...fadeInStyle }
      }
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeIn;
