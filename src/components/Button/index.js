import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Button: {
    "& .MuiButtonBase-root": {
      margin: "0px 8px",
      borderRadius: "20px",
      textTransform: "none",
      width: "max-content",
    },
  },
}));

const IconButton = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.Button}>
      <Button variant="contained" startIcon={<SearchIcon />} size="medium">
        {text}
      </Button>
    </div>
  );
};

export default IconButton;
