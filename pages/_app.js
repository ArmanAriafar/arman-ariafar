import "../styles/globals.css";
import "../styles/Font.css"
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>آرمان آریافر | طراح و توسعه دهنده Front-End</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
