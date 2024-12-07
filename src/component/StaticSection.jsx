import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatisticsSection = () => {
  const [isCounting, setIsCounting] = useState(false);
  const statsRef = useRef(null);
  const statistics = [
    { value: 5, label: "Years of Experience" },
    { value: 200, label: "International Clients" },
    { value: 400, label: "Million Valuation Scored" },
    { value: 50, label: "Expert Cleaners On-Call" },
  ];

  useEffect(() => {
    // Reset counting on each visit
    setIsCounting(false);

    // GSAP Animation
    const statsAnimation = gsap.fromTo(
      statsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () => startCounting(),
        },
      }
    );

    return () => {
      statsAnimation.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  const startCounting = () => {
    if (!isCounting) {
      setIsCounting(true);
      statistics.forEach((stat, index) => {
        const target = statsRef.current.children[index].querySelector("h2");
        let count = 0;
        const increment = Math.ceil(stat.value / 100);
        const duration = 2000;

        const countInterval = setInterval(() => {
          count += increment;
          if (count > stat.value) count = stat.value;
          target.textContent = count + "+";

          if (count === stat.value) {
            clearInterval(countInterval);
          }
        }, duration / (stat.value / increment));
      });
    }
  };

  return (
    <div className="my-10">
      {/* Statistics Section */}
      <div
        className="grid md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto"
        ref={statsRef}
      >
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="text-center opacity-0"
          >
            <h2 className="text-[50px] md:text-[80px] font-extrabold text-red-500">
              0+
            </h2>
            <p className="text-base md:text-lg font-semibold text-customGrey">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
