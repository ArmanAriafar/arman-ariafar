import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function SoftSkillsSlider() {
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
                <div slot="container-start" className="parallax-bg bg-softskills" data-swiper-parallax="-50%"></div>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            درباره من
                        </div>
                        <div className="text mt-2 text-base" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>دارای کاردانی طراحی صفحات وب</li>
                                <li>مسلط به زبان انگلیسی</li>
                                <li>وضعیت تاهل مجرد</li>
                                <li>متولد ۱۳۷۹/۰۶/۲۱</li>
                                <li>ساکن تهران</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            مهارت‌های محیط‌کاری
                        </div>
                        <div className="text mt-2 text-base" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>وقت‌شناس و مدیریت تایم</li>
                                <li>اشتیاق به مشارکت در پروژه</li>
                                <li>منعطف و تطبیق‌پذیر در امور</li>
                                <li>تحقیق و بررسی در امور</li>
                                <li>حل مسائل و چالش‌ها</li>
                                <li>شوخ‌طبع و مثبت‌نگر</li>
                                <li>روابط اجتماعی موثر</li>
                                <li>عیب یابی (دیباگنیگ)</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="w-full overflow-hidden bg-black/90 px-4 py-4">
                        <div className="title text-2xl font-thin" data-swiper-parallax="-500">
                            مهارت‌های کارگروهی
                        </div>
                        <div className="text mt-2 text-base" data-swiper-parallax="-100">
                            <ul className="leading-8 text-white/70">
                                <li>مسئولیت‌پذیر</li>
                                <li>انتقادگرا و انتقادپذیر</li>
                                <li>مهارت در برقراری ارتباط</li>
                                <li>منطبق با کار تیمی</li>
                            </ul>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
