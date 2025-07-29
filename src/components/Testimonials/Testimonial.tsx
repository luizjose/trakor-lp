import ScrollReveal from "../ScrollReveal/ScrollReveal";
import TestimonialsCarousel from "../TestimonialsCarousel/TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="bg-[#0F172A] text-white  mt-20 flex flex-col items-center">
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
        <p className="text-[#CBD5E1] text-sm md:px-0 px-8 xl:text-lg mt-2 mb-4 leading-relaxed text-center">
          Marcas que evoluíram com nossa solução e ajudaram a torná-la ainda
          melhor.
        </p>
      </ScrollReveal>
      {/* Testimonials content cards carousel */}
      <div className="overflow-hidden">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
