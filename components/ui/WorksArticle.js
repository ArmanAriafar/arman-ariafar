//? Comp
export default function WorksArticle({ imgSrc, title, subtitle, information, github, liveLink }) {
    return (
        <article
            className="
            grid h-full max-h-[570px] min-h-[520px] w-full max-w-[320px] cursor-grab 
            grid-rows-[45%_15%_30%_10%] overflow-hidden rounded-2xl bg-zinc-800 shadow-xl shadow-black/50"
        >
            <div className="h-full w-full shadow-2xl shadow-black/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={title} src={imgSrc} className="h-full w-full" />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
                <h2 className="text-[22px] font-thin text-white">{title}</h2>
                <p className="text-[15px] font-medium text-[#909090]">{subtitle}</p>
            </div>
            <div className="flex h-fit w-full flex-col items-end justify-center px-5">
                <div className="mb-4 w-full border-t border-dashed border-white/50" />
                <h3 className="mb-2 text-[15px] font-bold text-white/50">Techs and Libraries</h3>
                <div className="flex h-fit w-full flex-wrap items-start justify-start gap-y-2 gap-x-1" dir="ltr">
                    {information.map((info, key) => {
                        return (
                            <p
                                key={key}
                                className="rounded-full bg-[#383838] px-2 py-1 text-sm font-bold text-white/80"
                            >
                                {info}
                            </p>
                        );
                    })}
                </div>
            </div>
            {github && (
                <div className="grid grid-cols-2 items-center justify-items-center self-center text-sm font-bold text-white">
                    <a href={liveLink}>Live at Vercel</a>
                    <a href={github}>Github Repository</a>
                </div>
            )}
        </article>
    );
}
