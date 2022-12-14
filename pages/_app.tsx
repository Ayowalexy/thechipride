import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { NavigationContextProvider } from "../public/context/navigationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavigationContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NavigationContextProvider>
  );
}
