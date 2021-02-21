import { useEffect } from "react";
import Head from "next/head";
import HomePage from "components/pages/Home";
import Footer from "components/Footer";
import { InventoryProvider } from "inventory";

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
      <InventoryProvider>
        <div className="min-h-screen pb-24">
          <HomePage />
          <Footer />
        </div>
      </InventoryProvider>
    </>
  );
}
