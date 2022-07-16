//? Required
import ReactTyped from "react-typed";

//? Comp
export default function Home() {
    return (
        <header
            className="
            flex h-full max-h-screen min-h-screen w-full max-w-md items-end justify-center bg-arman1 bg-cover 
            bg-center font-sans lg:max-w-3xl lg:opacity-90 xl:max-w-4xl"
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
