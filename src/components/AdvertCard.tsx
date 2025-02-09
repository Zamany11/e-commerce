import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Image from 'next/image';

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
            <Image
              src="/images/ELIMELI.png"
              alt="Become a seller"
              className="w-full h-auto md:h-[250px] rounded-md"
              loading="lazy"
              width={2000}
              height={2000}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/ELIMELI (2).png"
              alt="Affiliate signup"
              className="w-full h-auto md:h-[250px] rounded-md"
              loading="lazy"
              width={2000}
              height={2000}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
