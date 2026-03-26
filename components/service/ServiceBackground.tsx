import React from "react";

const bgIcons = [
  <svg key="mol" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="20" cy="20" r="6" /><circle cx="40" cy="15" r="4" /><circle cx="35" cy="40" r="5" /><line x1="25" y1="22" x2="37" y2="17" /><line x1="22" y1="25" x2="32" y2="37" /></svg>,
  <svg key="flask" viewBox="0 0 50 70" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M18 5 L18 25 L5 55 Q3 62 10 62 L40 62 Q47 62 45 55 L32 25 L32 5" /><line x1="14" y1="5" x2="36" y2="5" /></svg>,
  <svg key="dna" viewBox="0 0 30 70" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 5 Q20 15 5 25 Q-10 35 5 45 Q20 55 5 65" /><path d="M25 5 Q10 15 25 25 Q40 35 25 45 Q10 55 25 65" /></svg>,
  <svg key="atom" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8"><circle cx="30" cy="30" r="3" fill="currentColor" /><ellipse cx="30" cy="30" rx="22" ry="9" /><ellipse cx="30" cy="30" rx="22" ry="9" transform="rotate(60 30 30)" /><ellipse cx="30" cy="30" rx="22" ry="9" transform="rotate(120 30 30)" /></svg>,
  <svg key="tube" viewBox="0 0 20 55" fill="none" stroke="currentColor" strokeWidth="1.2"><line x1="5" y1="5" x2="5" y2="40" /><line x1="15" y1="5" x2="15" y2="40" /><path d="M5 40 Q5 50 10 50 Q15 50 15 40" /><line x1="2" y1="5" x2="18" y2="5" /></svg>,
  <svg key="hex" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="0.8"><polygon points="20,4 35,12 35,28 20,36 5,28 5,12" /><polygon points="20,10 29,15 29,25 20,30 11,25 11,15" /></svg>,
  <svg key="mag" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="20" cy="20" r="14" /><line x1="30" y1="30" x2="44" y2="44" strokeWidth="2" strokeLinecap="round" /></svg>,
  <svg key="clip" viewBox="0 0 40 55" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="8" width="34" height="44" rx="2" /><rect x="12" y="3" width="16" height="10" rx="2" /><polyline points="10,24 14,28 22,20" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><line x1="26" y1="24" x2="32" y2="24" /></svg>,
];

const positions = [
  { top: "5%", left: "3%", size: "w-12 h-12", anim: "animate-float-1" },
  { top: "70%", left: "8%", size: "w-10 h-14", anim: "animate-float-2" },
  { top: "15%", left: "88%", size: "w-8 h-16", anim: "animate-float-3" },
  { top: "60%", left: "92%", size: "w-12 h-12", anim: "animate-float-4" },
  { top: "85%", left: "40%", size: "w-6 h-12", anim: "animate-float-5" },
  { top: "10%", left: "50%", size: "w-10 h-10", anim: "animate-float-6" },
  { top: "45%", left: "2%", size: "w-10 h-10", anim: "animate-float-7" },
  { top: "40%", left: "95%", size: "w-10 h-14", anim: "animate-float-8" },
];

export default function ServiceBackground() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {positions.map((pos, i) => (
          <div key={i} className={`absolute text-green-600/[0.06] ${pos.size} ${pos.anim}`} style={{ top: pos.top, left: pos.left }}>
            {bgIcons[i % bgIcons.length]}
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
