import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
