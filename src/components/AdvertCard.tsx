import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function AdvertCard() {
  return (
    <section className="bg-slate-100 pt-8 md:py-4">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-4 p-4 container mx-auto bg-white rounded-md">
        <img 
          src="/images/ELIMELI.png" 
          alt="Become a seller - earn royalties"
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
        <img 
          src="/images/ELIMELI (1).png" 
          alt="Affiliate signup - huge commissions"
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden swiper-container py-2">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 0,
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
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/ELIMELI (1).png"
              alt="Affiliate signup"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
