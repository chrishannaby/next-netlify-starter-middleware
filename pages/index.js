import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">Locale is {locale}</p>
      </main>

      <Footer />
    </div>
  );
}
