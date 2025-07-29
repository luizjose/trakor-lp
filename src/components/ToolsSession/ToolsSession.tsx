import ScrollReveal from "../ScrollReveal/ScrollReveal";

const ToolsSession = () => {
  return (
    <div className="bg-[#0F172A] py-20   flex flex-col-reverse md:flex-row items-center justify-center gap-12 ">
      {/* Coluna de Imagens */}
      <div className="xl:flex-1/2 flex flex-col items-left gap-2">
        {/* Imagem maior em cima */}
        <ScrollReveal delay={0.2}>
        <img
          src="./tools-img1.png"
          alt="Tool 1"
          className="xl:w-[400px] xl:h-[260px] w-[340px] h-[220px] object-cover rounded-lg shadow-lg mb-4"
        />
        </ScrollReveal>
        {/* Duas imagens menores lado a lado */}
        <div className="flex gap-4">
            <ScrollReveal delay={0.4}>
          <img
            src="./tools-img2.png"
            alt="Tool 2"
            className="xl:w-[288px] xl:h-[288px] w-[236px] h-[236px] object-cover rounded-lg shadow-lg"
          />
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
          <img
            src="./tools-img3.png"
            alt="Tool 3"
            className="xl:w-[288px] xl:h-[288px] w-[236px] h-[236px] object-cover rounded-lg shadow-lg"
          />
            </ScrollReveal>
        </div>
      </div>

      {/* Coluna de Texto */}
      <div className="text-left xl:flex-1/2 flex-2/5">
        <ScrollReveal delay={0.2}>
        <h2 className="text-white font-extrabold text-4xl md:text-[42px] xl:text-5xl leading-tight">
          Ferramentas poderosas.
        </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
        <h2 className="text-[#818CF8] font-extrabold text-4xl md:text-[42px] xl:text-5xl  leading-tight">
          Mais controle.
        </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
        <p className="text-[#CBD5E1] text-base xl:text-lg mt-2 mb-4 leading-relaxed">
          Soluções criadas para ajudar equipes modernas a serem mais produtivas. Controle, visibilidade e integração em um só painel.
        </p>
        </ScrollReveal>
        <ul className="text-[#CBD5E1] space-y-2 mb-6 text-sm xl:text-base">
            <ScrollReveal delay={0.8}>
          <li><strong className="text-[#6366F1]">✓</strong> Interdum volutpat turpis malesuada ac turpis.</li>
          </ScrollReveal>
          <ScrollReveal delay={0.9}>
          <li><strong className="text-[#6366F1]">✓</strong> Tortor ipsum pretium quis nunc.</li>
            </ScrollReveal>
            <ScrollReveal delay={1.0}>
          <li><strong className="text-[#6366F1]">✓</strong> Vitae odio a id purus in.</li>
            </ScrollReveal>
        </ul>

        <ScrollReveal delay={1.2}>
        <button className="bg-[#6366F1] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4F46E5] transition">
          Comece grátis
        </button>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ToolsSession;
