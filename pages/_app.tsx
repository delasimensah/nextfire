import type { AppProps } from "next/app";
import { Nunito_Sans } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AuthProvider from "@lib/contexts/authContextProvider";
import { DefaultSeo } from "next-seo";
import getTheme from "@lib/mantineTheme";

import { Navbar } from "@components";

import "@styles";

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const App = ({ Component, pageProps }: AppProps) => {
  const theme = getTheme(nunitoSans.style.fontFamily);

  return (
    <MantineProvider theme={theme}>
      <NotificationsProvider position="top-center">
        <AuthProvider>
          <DefaultSeo
            title="Next Fire"
            description="App build with Next.js and Firebase"
          />

          <style jsx global>{`
            * {
              font-family: ${nunitoSans.style.fontFamily};
            }
          `}</style>

          <Navbar />

          <Component {...pageProps} />
        </AuthProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default App;
