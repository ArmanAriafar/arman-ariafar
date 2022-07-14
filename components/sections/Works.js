//? Required
import WorksSlider from "../ui/WorksSlider";

//? Comp
export default function Works() {
    return (
        <section
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
        </section>
    );
}
