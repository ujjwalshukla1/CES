export const heroCss = `
@keyframes heroKenBurns { 0% { transform:scale(1); } 100% { transform:scale(1.08); } }
@keyframes heroFadeIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
@keyframes heroPulse { 0%,100% { opacity:0.4; } 50% { opacity:0.8; } }
@keyframes heroFloat { 0%,100% { transform:translateY(0) rotate(0deg); } 50% { transform:translateY(-15px) rotate(3deg); } }
.hero-ken-burns { animation:heroKenBurns 8s ease-out forwards; }
.hero-fade-1 { animation:heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
.hero-fade-2 { animation:heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
.hero-fade-3 { animation:heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both; }
.hero-fade-4 { animation:heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s both; }
.hero-particle { animation:heroPulse 3s ease-in-out infinite; }
.hero-float-1 { animation:heroFloat 6s ease-in-out infinite; }
.hero-float-2 { animation:heroFloat 8s ease-in-out infinite 1s; }
.hero-float-3 { animation:heroFloat 7s ease-in-out infinite 2s; }
`;
