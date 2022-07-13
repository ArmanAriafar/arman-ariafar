export default function Design() {
    return (
        <section className="flex h-full w-full items-center justify-center bg-design bg-cover bg-left p-20">
            <div className="grid h-fit w-full grid-cols-2 items-center justify-self-center">
                <article className="h-fit w-full bg-black/90 px-4 py-5 backdrop-blur-sm" dir="ltr">
                    <h2 className="text-2xl font-thin text-white">Design Skills</h2>
                    <ul className="mt-2 text-base leading-9 text-white/70">
                        <li>Spacing</li>
                        <li>Typography</li>
                        <li>Selecting Fonts</li>
                        <li>Color Theory</li>
                        <li>Color Sense</li>
                        <li>Composition / Layout</li>
                    </ul>
                </article>
                <article className="h-full w-full bg-black/80 px-4 py-5 backdrop-blur-sm" dir="ltr">
                    <h2 className="text-2xl font-thin text-white">Softwares</h2>
                    <ul className="mt-2 text-base leading-9 text-white/70">
                        <li>Figma</li>
                        <li>A.XD</li>
                        <li>A.Illustrator</li>
                        <li>A.Photoshop</li>
                    </ul>
                </article>
            </div>
        </section>
    );
}
