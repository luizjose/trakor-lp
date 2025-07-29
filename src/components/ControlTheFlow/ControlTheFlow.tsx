import ScrollReveal from "../ScrollReveal/ScrollReveal";

const ControlTheFlow = () => {
  return (
    <div className="bg-[#1E293B] w-full text-white pt-12 pl-12 mr-0 pb-0 mt-20 flex flex-col md:flex-row gap-14">
      {/* column Text */}
       <div className=" flex flex-col text-left justify-center flex-2/3">
                <ScrollReveal delay={0.2}>
                <h2 className="text-white font-extrabold text-4xl md:text-[42px] xl:text-5xl leading-tight">
                 Controle o fluxo.
                </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                <h2 className="text-[#818CF8] font-extrabold text-4xl md:text-[42px] xl:text-5xl  leading-tight">
                 Trabalhe mais rápido.
                </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                <p className="text-[#CBD5E1]  text-sm md:text-lg mt-2 mb-4 leading-relaxed">
                  Coordene tarefas com mais rapidez e reduza retrabalho. Aumente a eficiência com fluxos mais claros e inteligentes.
                </p>
                </ScrollReveal>
               
        
                <ScrollReveal delay={0.8}>
                <button className="bg-[#6366F1] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4F46E5] transition">
                  Comece grátis
                </button>
                </ScrollReveal>
              </div>
      {/* column Image */}
       <div className="">
            <ScrollReveal delay={0.2}>
            <img src="./flow-img.png" alt="Team Photo 1" className="w-full object-cover rounded-lg shadow-lg" />
            </ScrollReveal>
     
        </div>
    </div>
  );
}
export default ControlTheFlow;
