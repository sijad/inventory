import { useEffect } from "react";
import Head from "next/head";
import HomePage from "components/pages/Home";
import Footer from "components/Footer";

export default function Home(): JSX.Element {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <Head>
        <title>Inventory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen pb-24">
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
