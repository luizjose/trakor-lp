import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Companies = () => {
  return (
    <div className="flex flex-col items-center   gap-8">
        <ScrollReveal delay={0.2}>
      <h2 className="text-[#CBD5E1] text-center font-bold text-2xl">Confiado por equipes de empresas líderes</h2>
      </ScrollReveal>
      {/* Adicione o conteúdo das empresas aqui */}
      <div className="flex flex-wrap justify-center items-center gap-16 mt-8">
        <ScrollReveal delay={0.4}>
        <img src="./companies/logo-1.png" alt="Company 1" width={120}  />
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
        <img src="./companies/logo-2.png" alt="Company 2" width={120}  />
        </ScrollReveal>
        <ScrollReveal delay={0.8}>
        <img src="./companies/logo-3.png" alt="Company 3" width={120} />
        </ScrollReveal>
        <ScrollReveal delay={1.0}>
        <img src="./companies/logo-4.png" alt="Company 4" width={120}  />
        </ScrollReveal>
        <ScrollReveal delay={1.2}>
        <img src="./companies/logo-5.png" alt="Company 5" width={120} />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Companies;
