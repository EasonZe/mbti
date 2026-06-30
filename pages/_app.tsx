/* 中文标注：Next.js 全局入口，加载 Chakra UI 主题和全局字体。 */
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";

import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
