import { useEffect } from "react";
import Head from "next/head";
import Container from "components/Container";
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
      <div className="min-h-screen">
        <Container>
          <main className="max-w-3xl py-5 m-auto">
            <div className="flex md:space-x-3">
              <div className="fixed bottom-0 left-0 flex items-center flex-1 w-full px-5 py-3 md:py-5 md:relative md:rounded-2xl card">
                <button className="px-1 py-3 mr-3 text-white rounded-lg bg-primary">
                  <svg
                    className="w-10 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3V21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12L21 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-5 mt-2 ml-2 paragraph"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input className="w-full py-2 pl-8 pr-2 rounded-lg on-surface paragraph" />
                </div>
              </div>
              <div className="flex items-center w-full p-5 md:w-64 rounded-2xl card">
                <div className="w-full">
                  <p className="flex items-center text-lg font-bold header">
                    $ 370,345
                    <span className="ml-1 text-xs text-green">{"+13%"}</span>
                  </p>
                  <p className="text-sm paragraph">balance</p>
                </div>
                <button className="p-2 rounded-lg on-surface">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="w-full p-5 paragraph rounded-2xl card">
                {"table"}
              </div>
            </div>
          </main>
        </Container>
        <Footer />
      </div>
    </>
  );
}
