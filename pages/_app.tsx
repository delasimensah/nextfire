import type { AppProps } from "next/app";
import { Nunito_Sans } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { SEO, Navbar } from "../components";

import "../styles/globals.css";

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEO />

      <style jsx global>{`
        * {
          font-family: ${nunitoSans.style.fontFamily};
        }
      `}</style>

      <MantineProvider
        theme={{
          fontFamily: `${nunitoSans.style.fontFamily}`,
          headings: { fontFamily: `${nunitoSans.style.fontFamily}` },
        }}
      >
        <NotificationsProvider position="top-center">
          <Navbar />

          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
};

export default App;
