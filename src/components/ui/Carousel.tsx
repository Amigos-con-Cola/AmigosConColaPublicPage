import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import animales from "../../fakedata.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export interface Animal {
  id: number;
  nombre: string;
  edad: number;
  genero: string;
  imagen: string;
  estado: boolean;
  tipo: string;
}

const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <div className="shadow  pb-5 rounded-[20px] w-64 h-max gap-3 bg-white flex flex-col items-center">
      <img
        className="mt-5 rounded-full px-5 size-72 object-auto"
        src={animal.imagen}
        alt=""
      />
      <h2 className="font-['Amatic_SC'] font-bold text-4xl">{animal.nombre}</h2>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="flex  gap-20">
          <p>Gender</p>
          <p className="text-left">Boy</p>
        </div>
        <div className="flex gap-20">
          <p>Age</p>
          <p className="text-left">4 years</p>
        </div>
        <div className="flex gap-20">
          <p>Weight</p>
          <p className="text-left">15 Kg</p>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default () => {
  return (
    <Swiper
      className="w-[70%]  pb-14"
      breakpoints={{
        350: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoHeight={true}
    >
      {animales.map((animal: Animal) => (
        <SwiperSlide key={animal.id}>
          <AnimalCard  animal={animal} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
