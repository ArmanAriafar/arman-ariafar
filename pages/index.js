//? Required
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

//? Components
import NavComp from "../components/Layout/NavigationComp";
import Home from "../components/sections/Home";
import ContactMe from "../components/sections/ContactMe";
import Works from "../components/sections/Works";
import Skills from "../components/sections/Skills";

//? Comp
export default function App() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    const [isActive, setIsActive] = useState(1);
    if (screenWidth <= 1023) {
        return (
            <Swiper
                direction="vertical"
                effect={"creative"}
                speed={800}
                creativeEffect={{
                    prev: {
                        translate: [0, -30, -1],
                    },
                    next: {
                        translate: [0, "100%", 0],
                    },
                }}
                modules={[EffectCreative]}
                resistanceRatio={0}
                className="h-full max-h-[100vh] w-full max-w-md bg-zinc-900 lg:hidden"
            >
                <SwiperSlide>
                    {isActive === 1 ? (
                        <Home />
                    ) : isActive === 2 ? (
                        <Skills />
                    ) : isActive === 3 ? (
                        <Works />
                    ) : (
                        <ContactMe />
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    <NavComp setIsActive={setIsActive} isActive={isActive} />
                </SwiperSlide>
            </Swiper>
        );
    } else if (screenWidth >= 1024) {
        console.log(isActive);
        return (
            <header className="mx-auto hidden min-h-screen w-full max-w-5xl grid-cols-[30%_70%] items-center justify-self-center lg:grid xl:max-w-6xl">
                <NavComp setIsActive={setIsActive} isActive={isActive} />
                <AnimatePresence exitBeforeEnter>
                    <Home isActive={isActive} />
                    <Skills isActive={isActive} />
                    <Works isActive={isActive} />
                    <ContactMe isActive={isActive} />
                </AnimatePresence>
            </header>
        );
    }
}
