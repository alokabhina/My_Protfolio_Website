import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("opacity-100", "translate-y-0");
          element.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(element); // reveal only once
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      {children}
    </div>
  );
};
