import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";

function Page({ stars }) {
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
        <p className="description">
          Locale is {locale}. Number of stars: {stars}
        </p>
      </main>

      <Footer />
    </div>
  );
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
