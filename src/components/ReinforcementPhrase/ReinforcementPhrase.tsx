import ScrollReveal from "../ScrollReveal/ScrollReveal";
const ReinforcementPhrase = () => {

  return (
    <div className="bg-[#0F172A] flex flex-col items-center px-4 py-12 mt-20 gap-1">
      <ScrollReveal delay={0.2}>
        <h2 className="text-white font-extrabold text-center text-5xl tracking-tight">
          <strong>Sua equipe.</strong> <strong>Seus Projetos.</strong>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <h2 className="text-[#818CF8] font-extrabold text-5xl tracking-tight">
          Sempre conectados.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.6}>
        <p className="text-[#CBD5E1] text-center mt-4 mb-8 tracking-tight leading-5">
          Trabalhe junto, mesmo de longe. Gerencie tudo em um só lugar, de forma
          clara e eficiente.
        </p>
      </ScrollReveal>
      
    </div>
  );
};

export default ReinforcementPhrase;
