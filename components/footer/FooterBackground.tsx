export default function FooterBackground() {
  return (
    <>
      {/* Dense static pattern */}
      <div className="absolute inset-0 opacity-[0.20] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sci-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="3" fill="white" />
              <ellipse cx="30" cy="30" rx="14" ry="6" fill="none" stroke="white" strokeWidth="0.8" />
              <ellipse cx="30" cy="30" rx="14" ry="6" fill="none" stroke="white" strokeWidth="0.8" transform="rotate(60 30 30)" />
              <ellipse cx="30" cy="30" rx="14" ry="6" fill="none" stroke="white" strokeWidth="0.8" transform="rotate(120 30 30)" />
              <path d="M110 10 L110 28 L100 48 Q99 51 102 51 L118 51 Q121 51 120 48 L110 28" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="106" y1="10" x2="114" y2="10" stroke="white" strokeWidth="0.8" />
              <polygon points="170,25 180,20 190,25 190,35 180,40 170,35" fill="none" stroke="white" strokeWidth="0.8" />
              <polygon points="173,27 178,24 183,27 183,33 178,36 173,33" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M15 70 Q27 78 15 86 Q3 94 15 102" fill="none" stroke="white" strokeWidth="0.8" />
              <path d="M27 70 Q15 78 27 86 Q39 94 27 102" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="17" y1="78" x2="25" y2="78" stroke="white" strokeWidth="0.5" />
              <line x1="17" y1="94" x2="25" y2="94" stroke="white" strokeWidth="0.5" />
              <circle cx="80" cy="85" r="8" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="86" y1="91" x2="94" y2="99" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="140" y1="70" x2="140" y2="95" stroke="white" strokeWidth="0.8" />
              <line x1="148" y1="70" x2="148" y2="95" stroke="white" strokeWidth="0.8" />
              <path d="M140 95 Q140 102 144 102 Q148 102 148 95" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="137" y1="70" x2="151" y2="70" stroke="white" strokeWidth="0.8" />
              <circle cx="185" cy="85" r="6" fill="none" stroke="white" strokeWidth="0.7" />
              <circle cx="185" cy="85" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="185" y1="77" x2="185" y2="80" stroke="white" strokeWidth="1.5" />
              <line x1="185" y1="90" x2="185" y2="93" stroke="white" strokeWidth="1.5" />
              <line x1="177" y1="85" x2="180" y2="85" stroke="white" strokeWidth="1.5" />
              <line x1="190" y1="85" x2="193" y2="85" stroke="white" strokeWidth="1.5" />
              <line x1="55" y1="150" x2="55" y2="120" stroke="white" strokeWidth="0.7" />
              <line x1="55" y1="150" x2="95" y2="150" stroke="white" strokeWidth="0.7" />
              <rect x="60" y="135" width="5" height="15" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="68" y="128" width="5" height="22" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="76" y="122" width="5" height="28" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="84" y="132" width="5" height="18" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="120" y="125" width="22" height="30" rx="1.5" fill="none" stroke="white" strokeWidth="0.8" />
              <rect x="126" y="121" width="10" height="6" rx="1" fill="none" stroke="white" strokeWidth="0.7" />
              <polyline points="125,138 128,141 133,136" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="136" y1="139" x2="140" y2="139" stroke="white" strokeWidth="0.6" />
              <polyline points="125,146 128,149 133,144" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="136" y1="147" x2="140" y2="147" stroke="white" strokeWidth="0.6" />
              <ellipse cx="175" cy="130" rx="7" ry="4" fill="none" stroke="white" strokeWidth="0.7" />
              <line x1="175" y1="134" x2="175" y2="155" stroke="white" strokeWidth="1" />
              <line x1="175" y1="143" x2="185" y2="137" stroke="white" strokeWidth="0.8" />
              <circle cx="188" cy="135" r="3" fill="none" stroke="white" strokeWidth="0.7" />
              <line x1="168" y1="155" x2="182" y2="155" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="55" r="1.2" fill="white" />
              <circle cx="130" cy="55" r="1" fill="white" />
              <circle cx="95" cy="170" r="1.2" fill="white" />
              <circle cx="160" cy="170" r="1" fill="white" />
              <circle cx="45" cy="180" r="1" fill="white" />
              <line x1="100" y1="165" x2="100" y2="175" stroke="white" strokeWidth="0.8" />
              <line x1="95" y1="170" x2="105" y2="170" stroke="white" strokeWidth="0.8" />
              <line x1="160" y1="55" x2="160" y2="63" stroke="white" strokeWidth="0.8" />
              <line x1="156" y1="59" x2="164" y2="59" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sci-pattern)" />
        </svg>
      </div>

      {/* Floating animated icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-14 h-14 text-white/10 animate-float-1" style={{ top: "8%", left: "5%" }} viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 5 L20 30 L5 65 Q3 72 10 72 L50 72 Q57 72 55 65 L40 30 L40 5" /><line x1="15" y1="5" x2="45" y2="5" />
        </svg>
        <svg className="absolute w-12 h-12 text-white/10 animate-float-2" style={{ top: "55%", left: "12%" }} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="30" cy="30" r="4" fill="currentColor" /><ellipse cx="30" cy="30" rx="25" ry="10" /><ellipse cx="30" cy="30" rx="25" ry="10" transform="rotate(60 30 30)" /><ellipse cx="30" cy="30" rx="25" ry="10" transform="rotate(120 30 30)" />
        </svg>
        <svg className="absolute w-8 h-16 text-white/10 animate-float-3" style={{ top: "15%", left: "72%" }} viewBox="0 0 30 70" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M5 5 Q20 15 5 25 Q-10 35 5 45 Q20 55 5 65" /><path d="M25 5 Q10 15 25 25 Q40 35 25 45 Q10 55 25 65" />
        </svg>
        <svg className="absolute w-10 h-10 text-white/10 animate-float-4" style={{ top: "65%", left: "38%" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="15" /><line x1="31" y1="31" x2="45" y2="45" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute w-10 h-10 text-white/10 animate-float-5" style={{ top: "10%", left: "42%" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="25" cy="25" r="10" /><circle cx="25" cy="25" r="5" /><line x1="25" y1="12" x2="25" y2="17" strokeWidth="2.5" /><line x1="25" y1="33" x2="25" y2="38" strokeWidth="2.5" /><line x1="12" y1="25" x2="17" y2="25" strokeWidth="2.5" /><line x1="33" y1="25" x2="38" y2="25" strokeWidth="2.5" />
        </svg>
        <svg className="absolute w-12 h-12 text-white/10 animate-float-6" style={{ top: "45%", left: "82%" }} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="20,4 35,12 35,28 20,36 5,28 5,12" /><polygon points="20,10 29,15 29,25 20,30 11,25 11,15" />
        </svg>
        <svg className="absolute w-10 h-14 text-white/10 animate-float-7" style={{ top: "75%", left: "60%" }} viewBox="0 0 40 55" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="2" y="8" width="36" height="45" rx="2" /><rect x="12" y="3" width="16" height="10" rx="2" /><polyline points="9,24 13,28 21,20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="25" y1="24" x2="33" y2="24" />
        </svg>
        <svg className="absolute w-12 h-14 text-white/10 animate-float-8" style={{ top: "5%", left: "88%" }} viewBox="0 0 45 55" fill="none" stroke="currentColor" strokeWidth="1.3">
          <ellipse cx="20" cy="10" rx="10" ry="6" /><line x1="20" y1="16" x2="20" y2="42" strokeWidth="1.8" /><line x1="20" y1="28" x2="35" y2="18" /><circle cx="38" cy="16" r="5" /><line x1="10" y1="42" x2="30" y2="42" strokeWidth="1.8" />
        </svg>
        <svg className="absolute w-6 h-14 text-white/10 animate-float-9" style={{ top: "35%", left: "28%" }} viewBox="0 0 20 55" fill="none" stroke="currentColor" strokeWidth="1.3">
          <line x1="5" y1="5" x2="5" y2="40" /><line x1="15" y1="5" x2="15" y2="40" /><path d="M5 40 Q5 50 10 50 Q15 50 15 40" /><line x1="2" y1="5" x2="18" y2="5" />
        </svg>
      </div>
    </>
  );
}
