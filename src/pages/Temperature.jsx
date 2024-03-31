import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    margin: "86px 16px 16px 65px",
  },
}));

const Temperature = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} className={classes.boxContainer}>
        <Grid container spacing={2}></Grid>
      </Box>
    </div>
  );
};

export default Temperature;
