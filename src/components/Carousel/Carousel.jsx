// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../../assets/banner1.avif'
import bgimg2 from '../../assets/banner2.avif'
import bgimg3 from '../../assets/banner5.jpg'

export default function Carousel() {
    return (
        <div className='container mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}