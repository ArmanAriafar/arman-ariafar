export default function ContactMe() {
    return (
        <section className="h-full max-h-screen w-full bg-arman2 bg-cover bg-center" id="ContactMe">
            <div className="flex h-full w-full items-center justify-center bg-zinc-900/80">
                <div className="flex w-fit flex-col items-center justify-center">
                    <h6 className="text-2xl font-light text-white lg:text-4xl">
                        ارتــــــــــــــــــــــــباط بــــــــا مـــــــــــــــــــــــن
                    </h6>
                    <a
                        href="https://wa.me/0989108803727"
                        className="text-5xl font-thin text-white lg:text-7xl"
                        dir="ltr"
                    >
                        ۰۹۱۰ ۸۸۰ ۳۷۲۷
                    </a>
                    <div className="grid w-full grid-cols-[1.4fr_1.2fr_1fr] items-center justify-items-center text-[8.5px] font-light text-white lg:text-[13px]">
                        <a href="https://t.me/not_LOUD">www.telegram.me/armanariafar</a>
                        <a href="https://instagram.com/arman.arfr">instagram.com/arman.arfr</a>
                        <a href="mailto:theariafar@gmail.com">TheAriafar@Gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
