import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f2effc",
      100: "#d9d2f5",
      200: "#bfb4ef",
      300: "#a696e8",
      400: "#8c78e2",
      500: "#5e47b7",
      600: "#4a3891",
      700: "#37296b",
      800: "#231a45",
      900: "#110b21",
    },
    accent: {
      50: "#fff2ef",
      100: "#ffd9d1",
      200: "#ffb9aa",
      300: "#ff9983",
      400: "#ff7a5c",
      500: "#ff5b35",
      600: "#cc492a",
      700: "#99371f",
      800: "#662514",
      900: "#33120a",
    },
  },
});

export default theme;
