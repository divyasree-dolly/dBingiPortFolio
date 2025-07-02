"use client";
import { useRef } from "react";

const GlowCard = ({ children, identifier }) => {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    const CARD = cardRef.current;
    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const CARD_BOUNDS = CARD.getBoundingClientRect();
    if (
      event?.clientX > CARD_BOUNDS.left - CONFIG.proximity &&
      event?.clientX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
      event?.clientY > CARD_BOUNDS.top - CONFIG.proximity &&
      event?.clientY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
    ) {
      CARD.style.setProperty("--active", 1);
    } else {
      CARD.style.setProperty("--active", CONFIG.opacity);
    }

    const CARD_CENTER = [
      CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
      CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
    ];

    let ANGLE =
      (Math.atan2(event?.clientY - CARD_CENTER[1], event?.clientX - CARD_CENTER[0]) *
        180) /
      Math.PI;

    ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

    CARD.style.setProperty("--start", ANGLE + 90);
  };

  return (
    <div className={`glow-container-${identifier} glow-container relative`}>
      <article
        ref={cardRef}
        onMouseMove={handlePointerMove}
        className={`glow-card glow-card-${identifier} h-fit border border-[#2a2e5a] transition-all duration-300 relative bg-[#8b6c6c] dark:bg-[#8b95b6] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows pointer-events-none absolute inset-0"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
