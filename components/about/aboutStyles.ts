export const aboutCss = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
.hex-clip { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
.anim-fade-up { opacity:0; transform:translate3d(0,40px,0) scale(0.96); transition:opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
.anim-fade-left { opacity:0; transform:translate3d(-50px,0,0) scale(0.96); transition:opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1); }
.anim-fade-up.in-view, .anim-fade-left.in-view { opacity:1; transform:translate3d(0,0,0) scale(1); }
.sd-1 { transition-delay:0.1s; } .sd-2 { transition-delay:0.2s; } .sd-3 { transition-delay:0.3s; } .sd-4 { transition-delay:0.4s; } .sd-5 { transition-delay:0.5s; }
@keyframes float { 0% { transform:translateY(0); } 50% { transform:translateY(-10px); } 100% { transform:translateY(0); } }
.float { animation:float 6s ease-in-out infinite; }
.float-delay { animation:float 6s ease-in-out infinite; animation-delay:2s; }
.doctor-wrap { transition:transform 0.4s ease, box-shadow 0.4s ease; }
.doctor-wrap:hover { transform:translateY(-6px) scale(1.02); box-shadow:0 20px 50px rgba(0,0,0,0.15); }
.exp-card { transition:all 0.3s ease; }
.exp-card:hover { transform:translateY(-4px) scale(1.05); box-shadow:0 16px 40px rgba(0,0,0,0.12); }
.btn-cta { transition:all 0.3s ease; }
.btn-cta:hover { background:linear-gradient(135deg,#2db87a,#22a36a); transform:translateY(-3px) scale(1.02); box-shadow:0 14px 40px rgba(45,184,122,0.45); }
.doctor-wrap { position:absolute; top:0; left:52px; width:320px; height:390px; z-index:4; overflow:hidden; background:linear-gradient(160deg,#cce9d9,#a5d4bc); }
.hex-blue-wrap { position:absolute; bottom:42px; left:0; }
.hex-green-wrap { position:absolute; top:22px; right:28px; }
.exp-card-wrap { position:absolute; bottom:18px; right:0; }
@media (max-width:768px) { .doctor-wrap { width:210px; height:260px; left:50%; transform:translateX(-50%); } }
`;
