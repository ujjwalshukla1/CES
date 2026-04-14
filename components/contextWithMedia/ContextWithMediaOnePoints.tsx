interface ContextWithMediaOnePointInterface {
  icon: string;
  point: string;
}

function ContextWithMediaOnePoints({
  icon,
  point,
}: ContextWithMediaOnePointInterface) {
  return (
    <li className="flex items-center gap-4 text-teal-900 font-semibold">
      <span className="material-symbols-outlined text-[#005d3f]">{icon}</span>
      {point}
    </li>
  );
}

export default ContextWithMediaOnePoints;
