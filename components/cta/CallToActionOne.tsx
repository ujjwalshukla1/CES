function CallToActionOne() {
  return (
    <section className="p-4 w-full mx-auto bg-white">
      <div className="bg-[#005d3f] rounded-2xl overflow-hidden relative min-h-125 flex flex-col lg:flex-row items-center py-4">
        <div className="p-4 lg:w-1/2 text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-none">
            Get Your Environment <br />
            Tested Today.
          </h2>
          <p className="text-white/80 text-md md:text-xl mb-10 max-w-md">
            Join over 10,000 industrial partners who trust Precision Labs for
            their compliance and environmental safety data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#005d3f] px-10 py-5 rounded-full font-black text-md md:text-lg hover:bg-[#007952] hover:text-white transition-all">
              Start Consultation
            </button>
            <button className="bg-[#007952] text-white px-10 py-5 rounded-full font-black text-md md:text-lg ">
              Sample Report
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 h-full p-12 relative flex items-center justify-center">
          {/* <!-- Report Preview Mockup --> */}
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md rotate-3 translate-y-10 group hover:rotate-0 transition-transform duration-700">
            <div className="flex justify-between items-center mb-6">
              <div className="text-xs font-black text-[#005d3f] tracking-widest">
                CERTIFIED REPORT #892-X
              </div>
              <span className="material-symbols-outlined text-[#005d3f]">
                verified
              </span>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-[#e0e3e1] rounded w-3/4"></div>
              <div className="h-4 bg-[#e0e3e1] rounded w-1/2"></div>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-4 bg-[#005d3f]/5 rounded-lg border border-primary/10">
                  <div className="text-[10px] text-[#005d3f] font-bold">
                    OZONE (O3)
                  </div>
                  <div className="text-lg text-black font-bold">0.045 ppm</div>
                </div>
                <div className="p-4 bg-[#005d3f]/5 rounded-lg border border-[#005d3f]/10">
                  <div className="text-[10px] text-[#005d3f] font-bold">
                    PH LEVEL
                  </div>
                  <div className="text-lg text-black font-bold">7.4 pH</div>
                </div>
              </div>
              <div className="h-20 bg-[#ffffff] rounded-lg w-full flex items-center justify-center">
                <span className="material-symbols-outlined text-outline/30 text-5xl">
                  bar_chart
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#005d3f]-fixed-dim/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionOne;
