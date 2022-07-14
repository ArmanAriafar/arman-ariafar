//? Required
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

//? Components
import NavComp from "../components/Layout/NavigationComp";
import Home from "../components/sections/Home";
import ContactMe from "../components/sections/ContactMe";
import Works from "../components/sections/Works";
import Skills from "../components/sections/Skills";

const Variants = {
    hidden: {
        y: "100%",
    },
    animate: {
        y: 0,
    },
};

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
            <header className="mx-auto hidden min-h-screen w-full max-w-5xl grid-cols-[30%_70%] items-center justify-self-center overflow-hidden lg:grid xl:max-w-6xl">
                <NavComp setIsActive={setIsActive} isActive={isActive} />
                <div className="relative h-full w-full">
                    <AnimatePresence>
                        {isActive === 1 && (
                            <motion.div
                                variants={Variants}
                                initial="hidden"
                                animate="animate"
                                exit={{ y: "-100%" }}
                                transition={{ type: "tween", duration: 1 }}
                                className="absolute top-0 left-0 h-full w-full"
                                key="home"
                            >
                                <Home />
                            </motion.div>
                        )}
                        {isActive === 2 && (
                            <motion.div
                                variants={Variants}
                                initial="hidden"
                                animate="animate"
                                exit={{ y: "-100%" }}
                                transition={{ type: "tween", duration: 1 }}
                                className="absolute top-0 left-0 h-full w-full"
                                key="skills"
                            >
                                <Skills />
                            </motion.div>
                        )}
                        {isActive === 3 && (
                            <motion.div
                                variants={Variants}
                                initial="hidden"
                                animate="animate"
                                exit={{ y: "-100%" }}
                                transition={{ type: "tween", duration: 1 }}
                                className="absolute top-0 left-0 h-full w-full"
                                key="works"
                            >
                                <Works />
                            </motion.div>
                        )}
                        {isActive === 4 && (
                            <motion.div
                                variants={Variants}
                                initial="hidden"
                                animate="animate"
                                exit={{ y: "-100%" }}
                                transition={{ type: "tween", duration: 1 }}
                                className="absolute top-0 left-0 h-full w-full"
                                key="contactMe"
                            >
                                <ContactMe />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        );
    }
}
