export const contactCss = `
@keyframes cardReveal { from { opacity:0; transform:scale(0.96) translateY(24px); } to { opacity:1; transform:scale(1) translateY(0); } }
@keyframes slideFromLeft { from { opacity:0; transform:translateX(-36px); } to { opacity:1; transform:translateX(0); } }
@keyframes slideFromRight { from { opacity:0; transform:translateX(36px); } to { opacity:1; transform:translateX(0); } }
@keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
@keyframes shimmerText { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
@keyframes imageZoom { from { transform:scale(1.08); } to { transform:scale(1); } }
@keyframes checkPop { 0% { transform:scale(0.5); opacity:0; } 70% { transform:scale(1.25); } 100% { transform:scale(1); opacity:1; } }
@keyframes pulseRing { 0% { box-shadow:0 0 0 0 rgba(45,184,122,0.5); } 70% { box-shadow:0 0 0 10px rgba(45,184,122,0); } 100% { box-shadow:0 0 0 0 rgba(45,184,122,0); } }
@keyframes floatIcon { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
@keyframes spin { to { transform:rotate(360deg); } }
.card-anim { animation:cardReveal 0.75s cubic-bezier(0.16,1,0.3,1) both; }
.left-anim { animation:slideFromLeft 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
.right-anim { animation:slideFromRight 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
.badge-anim { animation:fadeUp 0.6s ease 0.25s both; }
.title-anim { animation:fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
.info-anim { animation:fadeUp 0.7s ease 0.5s both; }
.img-anim { animation:imageZoom 1.8s cubic-bezier(0.16,1,0.3,1) both; }
.float-icon { animation:floatIcon 3s ease-in-out infinite; }
.btn-pulse { animation:pulseRing 2.2s ease-out infinite; }
.spin { animation:spin 0.8s linear infinite; }
.shimmer-word { background:linear-gradient(90deg,#fff 0%,#4ade80 40%,#fff 60%,#86efac 100%); background-size:250% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shimmerText 2.8s linear infinite; }
`;
