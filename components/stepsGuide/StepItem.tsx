interface StepItemInterface {
  icon: string;
  title: string;
  description: string;
}

function StepItem({ icon, title, description }: StepItemInterface) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-20 h-20 rounded-full bg-[#005d3f] text-white flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110">
        <span className="rounded-full text-3xl">{icon}</span>
      </div>

      <h4 className="text-xl font-bold text-teal-950 mb-2">{title}</h4>

      <p className="text-sm text-[#3e4947]">{description}</p>
    </div>
  );
}

export default StepItem;
