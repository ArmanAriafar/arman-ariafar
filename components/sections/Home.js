//? Required
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

//? Comp
export default function Home({ isActive }) {
    const Variants = {
        hidden: {
            display: "none",
            opacity: 0,
        },
        animate: {
            display: isActive === 1 ? "flex" : "none",
            opacity: isActive === 1 ? 1 : 0,
            transition: {
                type: "tween",
                duration: 1,
                delay: isActive === 1 ? 1 : 0,
                display: {
                    delay: 1,
                },
            },
        },
    };

    return (
        <header
            className="
            flex h-full max-h-screen min-h-screen w-full max-w-md items-end justify-center bg-arman1 bg-cover 
            bg-center lg:max-w-3xl lg:opacity-90 xl:max-w-4xl"
            id="HomeSection"
        >
            <div className="w-full px-8 pb-32 text-4xl font-thin text-zinc-800 lg:text-5xl" dir="ltr">
                <p>
                    Heeey; <span className="text-3xl font-extrabold lg:text-4xl">I{"'"}M,</span>
                </p>
                <ReactTyped
                    strings={["Arman Ariafar", "React Developer", "Next Developer", "Ui Designer"]}
                    backDelay={1000}
                    typeSpeed={150}
                    backSpeed={50}
                    loop
                    className="text-3xl lg:text-4xl"
                />
            </div>
        </header>
    );
}
