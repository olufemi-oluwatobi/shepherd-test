import ThemeProvider from "@/providers/theme.provider";
import type { AppProps } from 'next/app';
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "900"] });

 
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ThemeProvider >
        <div className={roboto.className}>
        <Component {...pageProps} />
        </div>
      </ThemeProvider>
    );
  }