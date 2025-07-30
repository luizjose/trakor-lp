import ScrollReveal from "../ScrollReveal/ScrollReveal";

const InteractiveCall = () => {
  return (
    <>
      <div className="relative bg-[#4F46E5] flex flex-col items-center px-4 md:px-20 pt-4 pb-60 md:py-20 overflow-visible">
        <ScrollReveal delay={0.2}>
          <h1 className="text-white text-2xl md:text-5xl font-extrabold text-center  mx-auto mb-10">
            Torne a comunicação mais fluida. Simplifique seus processos com
            apenas alguns cliques.
          </h1>
        </ScrollReveal>

        {/* Container da imagem com margem negativa pra "invadir" a parte preta */}
        <div className="w-full -mb-[45vh] md:-mb-[25vh] lg:-mb-[50vh] xl:-mb-[70vh] mt-0.5 md:mt-12">
          <ScrollReveal delay={0.4}>
            <img
              src="./team/Desktop.png"
              alt="Interactive Call"
              className="w-full h-auto object-contain"
            />
          </ScrollReveal>
        </div>
      </div>
      <div className="h-[15vh] md:h-[20vh] lg:h-[50vh] bg-[#0F172A] flex flex-col items-center "></div>
    </>
  );
};

export default InteractiveCall;
