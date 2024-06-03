import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../assets/restuarent/menu/category-img-1.jpg";
import img2 from "../../../assets/restuarent/menu/category-img-2.jpg";
import img3 from "../../../assets/restuarent/menu/category-img-3.jpg";
import img4 from "../../../assets/restuarent/menu/category-img-4.jpg";
import img5 from "../../../assets/restuarent/menu/category-img-5.jpg";
import img6 from "../../../assets/restuarent/menu/home-1-carousel-image-101.jpg";
import img7 from "../../../assets/restuarent/menu/home-1-carousel-image-102.jpg";
import img8 from "../../../assets/restuarent/menu/home-1-carousel-image-103.jpg";

const IconicMenu = () => {
    return (
        <div className='my-10'>

            <div className='mb-10'>
                <h2 className="text-center text-yellow-600 font-bold text-xl ">INTERNATIONAL DISHES
                    </h2>
                <h3 className="text-center text-7xl font-extrabold text-white">Our Iconic Menus</h3>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img3} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img4} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img5} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img6} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img7} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded border-white border-2' src={img8} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default IconicMenu;