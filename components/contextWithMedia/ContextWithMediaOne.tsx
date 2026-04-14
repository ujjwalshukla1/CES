import Image from "next/image";
import ContextWithMediaOnePoints from "./ContextWithMediaOnePoints";

function ContextWithMediaOne() {
  const listItems = [
    { icon: "1", point: "Automated Sample Processing" },
    { icon: "2", point: "Real-time Cloud Data Sync" },
    { icon: "3", point: "Redundant Matrix Validation" },
  ];

  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-900 rounded-full blur-3xl"></div> */}
          <div className="rounded-xl overflow-hidden relative shadow-2xl">
            {/* <Image
              src=""
              alt="Laboratory equipment"
              className="w-full aspect-video object-cover"
              data-alt="A clean high-precision spectrometer in a modern lab with cold blue and white lighting and sterile surroundings"
              width={100}
              height={100}
            /> */}
            {/* <!-- Callouts --> */}
            <div className="absolute top-1/4 left-1/4 group">
              <div className="w-4 h-4 bg-[#005d3f] rounded-full border-2 border-white animate-ping"></div>
              <div className="absolute left-6 top-0 bg-white/90 backdrop-blur-md p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 shadow-lg">
                <p className="text-[10px] font-bold text-[#005d3f] uppercase">
                  GC-MS Analyzer
                </p>
                <p className="text-[10px] text-[#181c1c]">
                  Detects compounds at parts-per-billion sensitivity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-3xl md:text-5xl font-black text-teal-900 tracking-tighter mb-6">
            State-of-the-Art <br />
            Infrastructure
          </h2>
          <p className="text-md md:text-lg text-[#3e4947] mb-8 leading-relaxed">
            We invest in next-generation analytical instruments that eliminate
            human error. From Inductively Coupled Plasma Mass Spectrometers to
            automated titration systems, our lab is built for scale and
            sensitivity.
          </p>
          <ul className="space-y-4">
            {listItems.map((item, index) => (
              <ContextWithMediaOnePoints
                key={index}
                point={item.point}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContextWithMediaOne;
