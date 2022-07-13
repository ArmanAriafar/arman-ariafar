import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function CodingSlider() {
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
                <div slot="container-start" className="parallax-bg bg-coding" data-swiper-parallax="-50%"></div>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4" dir="ltr">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            My Favorite Ones
                        </div>
                        <div className="text mt-2 text-lg" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>Next.js</li>
                                <li>javaScript ES6</li>
                                <li>TailwindCss</li>
                                <li>Framer-Motion</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4" dir="ltr">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            Other Techs and Libraries
                        </div>
                        <div className="text mt-2 text-lg" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>React.js</li>
                                <li>Redux</li>
                                <li>Axios</li>
                                <li>Sass / Less</li>
                                <li>Styled-Components</li>
                                <li>Bootstrap/MetarialUi</li>
                                <li>Swiper.js</li>
                                <li>JavaScript</li>
                                <li>React-Select</li>
                                <li>Git - Github</li>
                                <li>DarkMode</li>
                                <li>Responsive</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4" dir="ltr">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            Coming Soon ...
                        </div>
                        <div className="text mt-2 text-lg" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>Nodejs</li>
                                <li>React-Native</li>
                                <li>SEO in Developing</li>
                                <li>etc...</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
