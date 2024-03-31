import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Themes from "./themes";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const AppWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={Themes.light}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
