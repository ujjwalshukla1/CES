import StepItem from "./StepItem";

function StepsGuide() {
  const StepItems = [
    {
      icon: "c",
      title: "Scheduling",
      description: "Coordination of field experts and site visit parameters.",
    },
    {
      icon: "b",
      title: "Collection",
      description: "Sterile retrieval of air, water, or soil specimen units.",
    },
    {
      icon: "p",
      title: "Analysis",
      description: "Multi-stage laboratory evaluation using automated sensors.",
    },
    {
      icon: "d",
      title: "Reporting",
      description: "Delivery of certified digital reports and certificates.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-teal-900 tracking-tight mb-4">
            End-to-End Testing Protocol
          </h2>
          <p className="text-[#3e4947] max-w-2xl mx-auto">
            A seamless workflow from site collection to verified digital
            reporting, optimized for speed and clinical accuracy.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {StepItems.map((item, index) => (
              <StepItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon} // ✅ pass icon (important)
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsGuide;
