//? Required
import Image from "next/image";
import { useState, useEffect } from "react";

//? Icons
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

//? Comp
export default function NavComp({ setIsActive, isActive, slideTo }) {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    const clickHandler = (slide) => {
        setIsActive(slide);
        screenWidth <= 1023 && slideTo(1);
    };
    return (
        <nav className="z-10 grid h-full w-full grid-rows-[2fr_1.8fr_1fr] items-center justify-self-center bg-zinc-900 px-8">
            <div className="w-full self-start">
                <div className="mx-auto aspect-square h-fit w-[90%] overflow-hidden rounded-full border-[10px] border-white/10 bg-white/5 lg:w-auto">
                    <Image
                        alt="Arman1"
                        src="/images/ArmanProf.webp"
                        width="5"
                        height="5"
                        layout="responsive"
                        className="brightness-90"
                    />
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                    <h1 className="text-[2.1rem] font-black text-white">
                        آرمان <span className="font-extralight">آریـــــــــــافر</span>
                    </h1>
                    <p className="text-[15px] font-extrabold tracking-wider text-white/70">
                        طراح و توسعه دهنده <span className="text-white/40">Front-End</span>
                    </p>
                </div>
            </div>
            <div className="w-full">
                <ul className="mr-5 list-disc font-bold leading-8 text-white">
                    <li>
                        <button
                            onClick={() => clickHandler(1)}
                            className={`navCompBtn ${isActive === 1 ? "activeClassName" : "text-white/50"}`}
                        >
                            خانه
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => clickHandler(2)}
                            className={`navCompBtn ${isActive === 2 ? "activeClassName" : "text-white/50"}`}
                        >
                            مهارت‌ها
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => clickHandler(3)}
                            className={`navCompBtn ${isActive === 3 ? "activeClassName" : "text-white/50"}`}
                        >
                            نمونه‌کارها
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => clickHandler(4)}
                            className={`navCompBtn ${isActive === 4 ? "activeClassName" : "text-white/50"}`}
                        >
                            ارتباط با من
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex w-full items-center justify-between self-end px-10 pb-4 text-white/60" dir="ltr">
                <a href="https://wa.me/0989108803727">
                    <IoLogoWhatsapp style={{ fontSize: "1.5rem" }} />
                </a>
                <a href="https://t.me/not_LOUD">
                    <FaTelegramPlane style={{ fontSize: "1.5rem" }} />
                </a>
                <a href="https://instagram.com/arman.arfr">
                    <AiFillInstagram style={{ fontSize: "1.5rem" }} />
                </a>
                <a href="mailto:theariafar@gmail.com">
                    <IoIosMail style={{ fontSize: "1.5rem" }} />
                </a>
            </div>
        </nav>
    );
}
