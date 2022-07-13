// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function DesignSlider() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-theme-color": "#000",
                    "--swiper-navigation-size": "2rem",
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
            >
                <div slot="container-start" className="parallax-bg bg-design" data-swiper-parallax="-20%"></div>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4" dir="ltr">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            Softwares
                        </div>
                        <div className="text mt-2 text-lg" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>Figma</li>
                                <li>A.XD</li>
                                <li>A.Illustrator</li>
                                <li>A.Photoshop</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4" dir="ltr">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            Design Skills
                        </div>
                        <div className="text mt-2 text-lg" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>Spacing</li>
                                <li>Typography</li>
                                <li>Selecting Fonts</li>
                                <li>Color Theory</li>
                                <li>Color Sense</li>
                                <li>Composition / Layout</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
