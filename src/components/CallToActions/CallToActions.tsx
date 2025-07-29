import ScrollReveal from "../ScrollReveal/ScrollReveal";

const CallToActions = () => {
  return (
    <div className="bg-[#0F172A] text-white  mt-20 mb-22 flex flex-col items-center">
          <ScrollReveal delay={0.2}>
            <h2 className="text-white font-extrabold text-center text-4xl md:text-[42px] xl:text-5xl leading-tight">
              Nossos parceiros. Nossos amigos.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <h2 className="text-[#818CF8] font-extrabold text-center text-4xl md:text-[42px] xl:text-5xl  leading-tight">
              Eles confiam em nós.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-[#CBD5E1] text-base xl:text-lg mt-2 mb-4 leading-relaxed text-center">
              Marcas que evoluíram com nossa solução e ajudaram a torná-la ainda
              melhor.
            </p>
          </ScrollReveal>
          {/* Call to action buttons */ }
            <ScrollReveal delay={0.8}>
                <div className="flex flex-1 w-full gap-2 md:gap-4 mt-6">
                <button className="bg-[#4F46E5] w-[190px] md:w-[280px] text-white px-6 py-4 rounded-[10px] font-semibold hover:bg-[#4F46E5] transition">
                    Comece grátis
                </button>
                <button className="bg-[#334155] w-[190px] md:w-[280px] text-white px-6 py-4 rounded-[10px] font-semibold hover:bg-[#6366F1] transition">
                    Saiba mais
                </button>
                </div>
            </ScrollReveal>
        </div>
    );
}

export default CallToActions;