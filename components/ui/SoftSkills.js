export default function SoftSkills() {
    return (
        <section className="grid h-full w-full grid-cols-2 grid-rows-2 bg-softskills bg-cover bg-left p-20">
            <article className="row-span-2 h-full w-full bg-black/90 py-5 pr-5 backdrop-blur-sm">
                <h2 className="text-2xl font-thin text-white">
                    مهارت‌های محیط‌کاری
                </h2>
                <ul className="mt-2 text-base leading-9 text-white/70">
                    <li>وقت‌شناس و مدیریت تایم</li>
                    <li>اشتیاق به مشارکت در پروژه</li>
                    <li>منعطف و تطبیق‌پذیر در امور</li>
                    <li>تحقیق و بررسی در امور</li>
                    <li>حل مسائل و چالش‌ها</li>
                    <li>شوخ‌طبع و مثبت‌نگر</li>
                    <li>روابط اجتماعی موثر</li>
                    <li>عیب یابی (دیباگنیگ)</li>
                </ul>
            </article>
            <article className="h-full w-full bg-black/90 py-5 pr-4 backdrop-blur-sm">
                <h2 className="text-2xl font-thin text-white">درباره من</h2>
                <ul className="mt-2 text-base leading-9 text-white/70">
                    <ul className="leading-8 text-white/70">
                        <li>دارای کاردانی طراحی صفحات وب</li>
                        <li>مسلط به زبان انگلیسی</li>
                        <li>وضعیت تاهل مجرد</li>
                        <li>متولد </li>
                        <li>ساکن تهران</li>
                    </ul>
                </ul>
            </article>
            <article className="h-full w-full bg-black/80 py-5 pr-4 backdrop-blur-sm">
                <h2 className="text-2xl font-thin text-white">مهارت‌های کارگروهی</h2>
                <ul className="mt-2 text-base leading-9 text-white/70">
                    <li>مسئولیت‌پذیر</li>
                    <li>انتقادگرا و انتقادپذیر</li>
                    <li>مهارت در برقراری ارتباط</li>
                    <li>منطبق با کار تیمی</li>
                </ul>
            </article>
        </section>
    );
}
