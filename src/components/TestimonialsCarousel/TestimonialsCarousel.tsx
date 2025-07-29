"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import {  FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    logo: "⚙️ Zoomerr",
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    name: "Hellen Jummy",
    role: "Team Lead",
    avatar: "/avatar1.jpg",
  },
  {
    logo: "🌐 SHELLS",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus ut ornare quam nulla.",
    name: "Hellena John",
    role: "Co-founder",
    avatar: "/avatar2.jpg",
  },
  {
    logo: "🏢 ArtVenue",
    text: "A eget sed posuere dui risus habitasse mauris. Pretium vehicula pretium posuere justo sed lorem cursus.",
    name: "David Oshodi",
    role: "Manager",
    avatar: "/avatar3.jpg",
  },
  {
    logo: "🌐 SHELLS",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus ut ornare quam nulla.",
    name: "Hellena John",
    role: "Co-founder",
    avatar: "/avatar2.jpg",
  },
  {
    logo: "⚙️ Zoomerr",
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    name: "Hellen Jummy",
    role: "Team Lead",
    avatar: "/avatar1.jpg",
  },
  {
    logo: "🏢 ArtVenue",
    text: "A eget sed posuere dui risus habitasse mauris. Pretium vehicula pretium posuere justo sed lorem cursus.",
    name: "David Oshodi",
    role: "Manager",
    avatar: "/avatar3.jpg",
  },
  {
    logo: "🌐 SHELLS",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus ut ornare quam nulla.",
    name: "Hellena John",
    role: "Co-founder",
    avatar: "/avatar2.jpg",
  },
];

export default function TestimonialsCarousel() {
    const [, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-[#0F172A] mt-12 overflow-hidden">
      <div className="max-w-[96vw] min-w-[96vw] md:max-w-[98vw] md:min-w-[98vw]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          spaceBetween={3}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full max-w-[100%] h-[335px] md:h-[450px] gap-1.5 overflow-hidden"
          breakpoints={{
            0: { slidesPerView: 2.4, centeredSlides: true },
            768: { slidesPerView: 4, centeredSlides: true },
            1024: { slidesPerView: 5, centeredSlides: true },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isPrev, isNext }) => (
                <div 
                  className={`
                    bg-[#334155] p-3 md:px-6 md:py-6 rounded-xl text-white max-w-[245px] md:max-w-[380px]  shadow-md
                    transition-all duration-300 ease-in-out
                    ${isActive ? 'scale-100 opacity-100' : 'scale-80 opacity-60'}
                    ${isPrev || isNext ? 'scale-90 opacity-70' : ''}
                    h-full
                  `}
                >
                  <div>
                    <h3 className="font-bold text-[#94A3B8] text-[16px] md:text-2xl mb-5 md:mb-8">{item.logo}</h3>
                    <p className="text-[16px] md:text-2xl leading-5 md:leading-8 font-normal text-white">{item.text}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-10">
                    <FaUserCircle size={50} className=" text-[#818CF8]" />
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-300">{item.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação */}
        <div className="flex justify-center gap-6 mt-8">
          <button className="prev-btn text-white font-bold text-lg px-4 py-2 rounded hover:bg-white hover:text-black transition">
            ← Prev
          </button>
          <button className="next-btn text-white font-bold text-lg px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
