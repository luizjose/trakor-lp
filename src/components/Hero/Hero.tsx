import { useInView } from "react-intersection-observer";
import HeroAnimation from "../HeroAnimation/HeroAnimation";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div
      style={{ height: "calc(90vh - 90px)" }}
      className="bg-[#0F172A] flex flex-col items-center px-2 md:px-4 mt-16  md:mt-22"
    >
      <ScrollReveal delay={0.1}>
        <p className="text-[#818CF8] font-[500] text-[16px] text-center md:text-[18px] tracking-tight">
          Ferramenta de acompanhamento do progresso da equipe
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <h2 className=" text-[48px] md:text-[62px] text-center font-extrabold leading-12 md:leading-tight md:tracking-tight">
          Acompanhe o progresso da sua equipe
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <p className="text-[#CBD5E1] text-center  mt-4 mb-6 md:mb-8 tracking-tight leading-5">
          10 processos. 1 fluxo de trabalho. Colabore em projetos e tarefas.
          Crie uma cultura de entrega com visibilidade e organização.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.7}>
        <div>
          <button className="bg-[#4F46E5] hover:bg-[#4338CA] px-3 md:px-6 py-4 rounded-[8px] mr-1 md:mr-4 cursor-pointer">
            Comece grátis
          </button>
          <button className="bg-[#334155] hover:bg-[#1E293B] px-3 md:px-6 py-4 rounded-[8px] cursor-pointer">
            Solicitar mais informações
          </button>
        </div>
      </ScrollReveal>

      {/* HeroAnimation com controle de visibilidade */}
      <div ref={ref} className="mt-20 md:mt-22">
        <HeroAnimation start={inView} />
      </div>
    </div>
  );
};

export default Hero;
