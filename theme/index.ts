/* 中文标注：Chakra UI 主题配置，统一按钮颜色、字体、滚动条和深浅色样式。 */
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      "50": "#F6FAFF",
      "100": "#EEF5FF",
      "200": "#D8E6F8",
      "300": "#C3D4EC",
      "400": "#B8CCE8",
      "500": "#C3D4EC",
      "600": "#B8CCE8",
      "700": "#8FAFD6",
      "800": "#5F83AE",
      "900": "#17232c",
    },
  },
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 900,
        borderRadius: "18px",
        transition: ".18s ease",
      },
      variants: {
        solid: (props: any) => {
          if (props.colorScheme === "primary") {
            return {
              bg: props.colorMode === "dark" ? "#C3D4EC" : "#B8CCE8",
              color: "#0b141c",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 10px 24px rgba(143,175,214,.32)",
              _hover: {
                bg: "#D8E6F8",
                transform: "translateY(-1px)",
                boxShadow: "0 14px 30px rgba(143,175,214,.42)",
                _disabled: {
                  bg: props.colorMode === "dark" ? "#C3D4EC" : "#B8CCE8",
                  transform: "none",
                },
              },
              _active: {
                bg: "#B8CCE8",
                transform: "translateY(0)",
              },
              _disabled: {
                opacity: 0.56,
                color: "#0b141c",
                cursor: "not-allowed",
              },
            };
          }

          return {};
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        background: props.colorMode === "dark" ? "#091018" : "#edf6fb",
        color: props.colorMode === "dark" ? "#f4f9fb" : "#17232c",
      },
      "#__next": {
        minHeight: "100vh",
      },
      "*": {
        WebkitTapHighlightColor: "transparent",
      },
      "::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
      },
      "::-webkit-scrollbar-thumb": {
        background: props.colorMode === "dark" ? "rgba(195,212,236,.32)" : "rgba(143,175,214,.42)",
        borderRadius: "999px",
      },
      "::selection": {
        background: "rgba(195, 212, 236, .42)",
      },
    }),
  },
});

export default theme;
