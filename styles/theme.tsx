import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = { body: `'Actor', sans-serif` };

const breakpoints = {
  xs: "30em",
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
};

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
          pointerEvents: "auto",
        },
        dialogContainer: {
          pointerEvents: "none",
        },
      },
    },
  },
  Button: {
    variants: {
      solid: {
        background: "grey.900",
        color: "white",
      },
    },
  },
  Tag: {
    variants: {
      solid: {
        background: "grey.500",
        color: "white",
      },
    },
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      "*": {
        borderColor: "gray.700",
        color: "white",
      },

      body: {
        bg: "body-bg",
      },
    }),
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
      "body-bg": {
        default: "#16161D",
        _dark: "#0F0F1B",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
    grey: {
      500: "#FFFFFF14",
      800: "#232341",
      900: "#19192E",
    },
    red: {
      700: "#CC5252",
    },
  },
  fonts,
  breakpoints,
  components,
});

export default theme;
