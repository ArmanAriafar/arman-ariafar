//? Required
import WorksSlider from "../ui/WorksSlider";
import { motion } from "framer-motion";

//? Comp
export default function Works({ isActive }) {
    const Variants = {
        hidden: {
            opacity: 0,
        },
        animate: {
            display: isActive === 3 ? "flex" : "none",
            opacity: isActive === 3 ? 1 : 0,
            transition: {
                type: "tween",
                duration: 1,
                delay: isActive === 3 ? 1 : 0,
                display: {
                    delay: 1,
                },
            },
        },
    };

    return (
        <motion.section
            variants={Variants}
            initial="hidden"
            animate="animate"
            exit={{ opacity: "0" }}
            className="flex h-full max-h-screen min-h-screen w-full max-w-md flex-col items-center justify-start lg:max-w-3xl lg:opacity-90 xl:max-w-4xl"
            id="WorksSection"
        >
            <header className="relative mt-5 flex h-24 w-full items-center justify-center lg:justify-end">
                <h1 className="absolute top-0 right-1/2 z-10 translate-x-1/2 text-7xl font-thin text-zinc-800 lg:right-0 lg:translate-x-0">
                    نمونه‌کارها
                </h1>
            </header>
            <div className="works h-full w-full bg-white">
                <WorksSlider />
            </div>
        </motion.section>
    );
}
