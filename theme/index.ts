import {
  extendTheme,
  type StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      "50": "#f4f9fb",
      "100": "#e6f1f6",
      "200": "#c9dbe6",
      "300": "#b8cedb",
      "400": "#9fb9c9",
      "500": "#8ab0c8",
      "600": "#6f96ac",
      "700": "#567789",
      "800": "#314a59",
      "900": "#17232c",
    },
  },
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        background: props.colorMode === "dark" ? "#091018" : "#eef5f8",
      },
      "#__next": {
        minHeight: "100vh",
      },
      "::selection": {
        background: "rgba(159, 185, 201, .35)",
      },
    }),
  },
});

export default theme;
