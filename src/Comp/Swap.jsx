// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Swap = () => {
    return (
       <div className='w-[60%] rounded-lg'>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://images.unsplash.com/photo-1712688930249-98e1963af7bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" /></SwiperSlide>

      <SwiperSlide><img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBhcnRtZW50fGVufDB8fDB8fHww" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXBhcnRtZW50fGVufDB8fDB8fHww" alt="" /></SwiperSlide>
      
    </Swiper>
       </div>
    );
};

export default Swap;