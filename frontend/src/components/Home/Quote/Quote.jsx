import { useState, useRef, useEffect } from "react";

function Quote(props) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={"quote-containers " + `fade-in ${isVisible ? "visible" : ""}`}
      ref={domRef}
    >
      <img src={props.img} alt="" />
      <h2 className="quote">"{props.quote}"</h2>
    </div>
  );
}

export default Quote;
