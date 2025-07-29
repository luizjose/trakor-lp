import ScrollReveal from "../ScrollReveal/ScrollReveal";

const TeamManagement = () => {
  return (
    <div className="bg-[#0F172A] py-20   flex flex-col md:flex-row items-center justify-center gap-12 ">
         {/* Coluna de Texto */}
              <div className="text-left xl:flex-1/2 flex-2/5">
                <ScrollReveal delay={0.2}>
                <h2 className="text-white font-extrabold text-4xl md:text-[42px] xl:text-5xl leading-tight">
                 Gestão de equipe.
                </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                <h2 className="text-[#818CF8] font-extrabold text-4xl md:text-[42px] xl:text-5xl  leading-tight">
                  Sincronização sem esforço.
                </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                <p className="text-[#CBD5E1] text-base xl:text-lg mt-2 mb-4 leading-relaxed">
                  Alinhe tarefas, defina prioridades e mantenha a equipe conectada. Sincronize projetos com facilidade e acompanhe o progresso em tempo real.
                </p>
                </ScrollReveal>
                <ul className="text-[#CBD5E1] space-y-2 mb-6 text-sm xl:text-base">
                    <ScrollReveal delay={0.8}>
                  <li><strong className="text-[#6366F1]">✓</strong> Planejamento e acompanhamento de tarefas</li>
                  </ScrollReveal>
                  <ScrollReveal delay={0.9}>
                  <li><strong className="text-[#6366F1]">✓</strong> Comunicação integrada</li>
                    </ScrollReveal>
                    <ScrollReveal delay={1.0}>
                  <li><strong className="text-[#6366F1]">✓</strong> Colaboração em tempo real</li>
                    </ScrollReveal>
                </ul>
        
                <ScrollReveal delay={1.2}>
                <button className="bg-[#6366F1] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4F46E5] transition">
                  Comece grátis
                </button>
                </ScrollReveal>
              </div>
        {/* Coluna de Imagen */}
        <div className="flex flex-col gap-6 flex-2/5">
            <ScrollReveal delay={0.2}>
            <img src="./manage-img.png" alt="Team Photo 1" className="w-full object-cover rounded-lg shadow-lg" />
            </ScrollReveal>
     
        </div>
    </div>
  );
};

export default TeamManagement;
