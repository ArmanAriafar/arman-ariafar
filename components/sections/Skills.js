//? Required
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Variants } from "../utils/AnimatePerComps";

//? Comps
import DesignSlider from "../ui/DesingSlider";
import CodingSlider from "../ui/CodingSlider";
import SoftSkillsSlider from "../ui/SoftSkillsSlider";
import Design from "../ui/Design";
import Coding from "../ui/Coding";
import SoftSkills from "../ui/SoftSkills";

//? Comp
export default function Skills() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [active, setActive] = useState(2);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    return (
        <motion.section
            variants={Variants}
            initial="hidden"
            animate="animate"
            exit={{ y: "-100vh" }}
            className="
            flex h-full max-h-screen min-h-screen w-full max-w-md flex-col items-center justify-start
            lg:max-w-3xl lg:opacity-90 xl:max-w-4xl"
            id="SkillsSection"
        >
            <header className="relative mt-5 flex h-24 w-full items-center justify-center lg:justify-end">
                <h1 className="absolute top-0 right-1/2 z-10 translate-x-1/2 text-7xl font-thin text-zinc-800 lg:right-0 lg:translate-x-0">
                    مهــــارت‌ها
                </h1>
                <div className="z-20 grid w-full grid-cols-3 items-center justify-items-center font-light text-white lg:w-1/2 lg:-translate-y-2">
                    <button onClick={() => setActive(1)} className={active === 1 ? "font-black underline" : ""}>
                        طراحی
                    </button>
                    <button onClick={() => setActive(2)} className={active === 2 ? "font-black underline" : ""}>
                        برنامه‌نویسی
                    </button>
                    <button onClick={() => setActive(3)} className={active === 3 ? "font-black underline" : ""}>
                        محیط‌کاری
                    </button>
                </div>
            </header>
            {screenWidth <= 1023 ? (
                <div className="skills h-full w-full">
                    {active === 1 && <DesignSlider />}
                    {active === 2 && <CodingSlider />}
                    {active === 3 && <SoftSkillsSlider />}
                </div>
            ) : (
                <div className="h-full w-full">
                    {active === 1 && <Design />}
                    {active === 2 && <Coding />}
                    {active === 3 && <SoftSkills />}
                </div>
            )}
        </motion.section>
    );
}
