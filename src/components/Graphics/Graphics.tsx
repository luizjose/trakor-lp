import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Graphics = () => {
  return (
    <div className="bg-[#0F172A] pt-12 pl-12 pb-12  pr-0 rounded-[20px] gap-12 flex flex-col md:flex-row border border-[#475569]">
      {/* Coluna de texto */}
      <div className="flex-1 gap-8 flex pr-1 flex-col">
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl md:text-[32px] leading-8 font-bold ">
            Visualize o progresso. Transforme dados em ações estratégicas.
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="text-sm md:text-[18px] leading-[24px] text-[#CBD5E1]">
            Relatórios inteligentes para decisões rápidas. Tenha uma visão clara
            da produtividade e desempenho da equipe com gráficos dinâmicos e
            insights valiosos. Identifique pontos fortes, melhore processos e
            tome decisões embasadas com mais segurança e agilidade.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <button className="bg-[#334155] w-[260px] hover:bg-[#1E293B] px-6 py-4 rounded-[8px] cursor-pointer">
            Solicite mais informações
          </button>
        </ScrollReveal>
      </div>
      {/* Coluna de imagem */}

      <div className="flex-1 -mr-1">
        <ScrollReveal delay={0.4}>
          <img
            src="./graphic-img.png"
            alt="Graphics"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Graphics;
