import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  adoptado: false;
  especie: string;
  historia: string;
  ubicacion: string;
  peso: number;
  codigo: string;
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
      <div className="flex flex-col gap-3 items-center  px-5 w-full">
        <div className="flex justify-between w-full">
          <p className="font-semibold">Género</p>
          <p>{animal.genero === "Male" ? "Macho" : "Hembra"}</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="font-semibold">Edad</p>
          <p>{animal.edad} meses</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="font-semibold">Peso</p>
          <p>{animal.peso} kilos</p>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default function Carousel(props: any) {
  const [animales, setAnimales] = useState<Animal[]>([]);
  useEffect(() => {
    const fetchAnimales = async () => {
      const response = await fetch(
        import.meta.env.PUBLIC_API_URL + "animals?page=1&perPage=12",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: import.meta.env.API_KEY,
          },
        },
      );

      const data = await response.json();
      const animales = data.data;
      setAnimales(animales);
    };
    fetchAnimales();
  }, []);

  return (
    <>
      <style></style>
      {animales.length > 0 ? (
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
              <AnimalCard animal={animal} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <div className="w-full  pt-32 flex-1 flex justify-center">
            {props.dogLoader}
          </div>
          <h2 className="text-center font-Amatic_SC text-2xl">
            Cargando animales disponibles...
          </h2>
        </>
      )}
    </>
  );
}
