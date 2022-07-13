export default function Coding() {
    return (
        <section className="grid h-full w-full grid-cols-2 grid-rows-2 bg-coding bg-cover bg-left p-20">
            <article className="row-span-2 h-full w-full bg-black/90 px-5 py-5 backdrop-blur-sm" dir="ltr">
                <h2 className="text-2xl font-thin text-white">Other Techs and Libraries</h2>
                <ul className="mt-2 text-base leading-7 text-white/70 xl:leading-9">
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
            </article>
            <article className="h-full w-full bg-black/90 px-4 py-5 backdrop-blur-sm" dir="ltr">
                <h2 className="text-2xl font-thin text-white">My Favorite Ones</h2>
                <ul className="mt-2 text-base leading-7 text-white/70 xl:leading-9">
                    <li>Next.js</li>
                    <li>javaScript ES6</li>
                    <li>TailwindCss</li>
                    <li>Framer-Motion</li>
                </ul>
            </article>
            <article className="h-full w-full bg-black/80 p-4 py-5 backdrop-blur-sm" dir="ltr">
                <h2 className="text-2xl font-thin text-white">Coming Soon ...</h2>
                <ul className="mt-2 text-base leading-7 text-white/70 xl:leading-9">
                    <li>Nodejs</li>
                    <li>React-Native</li>
                    <li>SEO in Developing</li>
                    <li>etc...</li>
                </ul>
            </article>
        </section>
    );
}
