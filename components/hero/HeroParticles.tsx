export default function HeroParticles() {
  const particles = [
    { size: "w-2 h-2", color: "bg-green-400/40", float: "hero-float-1", top: "20%", left: "10%" },
    { size: "w-1.5 h-1.5", color: "bg-white/30", float: "hero-float-2", top: "40%", left: "80%" },
    { size: "w-3 h-3", color: "bg-green-400/20", float: "hero-float-3", top: "70%", left: "25%" },
    { size: "w-1 h-1", color: "bg-white/40", float: "hero-float-1", top: "30%", left: "60%" },
    { size: "w-2 h-2", color: "bg-green-400/30", float: "hero-float-2", top: "60%", left: "45%" },
    { size: "w-1.5 h-1.5", color: "bg-white/20", float: "hero-float-3", top: "15%", left: "90%" },
    { size: "w-2.5 h-2.5", color: "bg-green-400/25", float: "hero-float-1", top: "80%", left: "70%" },
    { size: "w-1 h-1", color: "bg-white/35", float: "hero-float-2", top: "50%", left: "15%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${p.size} ${p.color} hero-particle ${p.float}`}
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  );
}
