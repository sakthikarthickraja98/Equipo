import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#83c098",
      main: "#65b17f",
      dark: "#467b58",
    },
    secondary: {
      light: "#63ddac",
      main: "#3dd598",
      dark: "#2a956a",
    },
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  light: responsiveFontSizes(lightTheme),
};
