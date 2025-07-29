import ScrollReveal from "../ScrollReveal/ScrollReveal";

const VisualHighlight = () => {
  return (
    <div className="bg-[#0F172A] flex flex-col md:flex-row items-center px-4 py-12 mt-20 gap-12">
        {/*Colunm text */}
        <div className="flex-1">
            <ScrollReveal delay={0.2}>
            <h2 className="font-extrabold text-center md:text-left text-5xl">Equipe maior</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
            <h2 className="text-[#818CF8] font-extrabold text-center md:text-left text-5xl">Mais tempo.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
            <p className="text-[#CBD5E1] text-lg text-center md:text-left mt-4 mb-8 tracking-tight leading-5">
               Com mais controle sobre os fluxos e responsabilidades, sua equipe pode focar no que realmente importa. 
            </p>
            </ScrollReveal>
            </div>
        {/*Colunm images */}
        <div className="flex flex-col gap-6 flex-1">
        <div className=" flex gap-6 ml-0 md:ml-12   ">
            <ScrollReveal delay={0.2}>
            <img src="./team/photo-1.png" alt="Visual 1"  className="md:w-full  md:h-[200px] object-cover rounded-lg shadow-lg" />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
            <img src="./team/photo-2.png" alt="Visual 2"  className="md:w-full  md:h-[200px] object-cover rounded-lg shadow-lg" />
            </ScrollReveal>
        </div>
        <div className=" flex gap-6">
            <ScrollReveal delay={0.6}>
            <img src="./team/photo-3.png" alt="Visual 3"  className="md:w-full  md:h-[200px] object-cover rounded-lg shadow-lg" />
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
            <img src="./team/photo-4.png" alt="Visual 4"  className=" md:w-full  md:h-[200px] object-cover rounded-lg shadow-lg" />
            </ScrollReveal>
        </div>
            
        </div>
    </div>
  );
};

export default VisualHighlight;
