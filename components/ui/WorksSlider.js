// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, FreeMode } from "swiper";

import WorksArticle from "./WorksArticle";

export default function WorksSlider() {
    const [prevData, setPrevData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("https://next-arman-ariafar.vercel.app/api/data");
            setPrevData(data);
        };
        getData();
    }, []);
    return (
        <Swiper
            style={{
                "--swiper-theme-color": "#000000",
            }}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            speed={5000}
            loop={true}
            breakpoints={{
                1024: {
                    slidesPerView: 2,
                },
            }}
            freeMode={{ sticky: true }}
            autoplay={{
                delay: 0,
                disableOnInteraction: true,
            }}
            modules={[Pagination, Autoplay, FreeMode]}
        >
            {prevData.map((e) => {
                return (
                    <SwiperSlide key={e.id}>
                        <WorksArticle
                            imgSrc={e.imgSrc}
                            title={e.title}
                            subtitle={e.subtitle}
                            information={e.information}
                            github={e.github}
                            liveLink={e.live}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
