import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function AdvertCard() {
  return (
    <section className="bg-slate-100 pt-8 md:py-4">
      

      {/* Slider */}
      <div className=" container mx-auto py-2 px-4 bg-white">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: false
          }}
          speed={1000}
          
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="px-4"
        >
          <SwiperSlide>
            <img
              src="/images/ELIMELI.png"
              alt="Become a seller"
              className="w-full h-auto md:h-[250px] rounded-md"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/ELIMELI (1).png"
              alt="Affiliate signup"
              className="w-full h-auto md:h-[250px] rounded-md"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
