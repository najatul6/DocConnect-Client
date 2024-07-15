import ReviewCard from "./ReviewCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const ReviewsSection = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center text-center w-[75%] mx-auto my-5">
        <h1 className="text-3xl font-bold">What Our Patients Says</h1>
        <p className="text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolor emque laudanum, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Autoplay,Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
