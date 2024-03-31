import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    borderColor: "#1976d2",
    borderStyle: "solid",
    padding: "2px",
    flex: "1",
  },
  Title: {
    margin: "1px 0px 2px",
    backgroundColor: "#1976d2",
    color: "#ffffff",
    textAlign: "-webkit-center",
    padding: "2px 0px",
    fontFamily: "system-ui",
    fontSize: "14px",
  },
  content: {
    margin: "1px 0px 2px",
    backgroundColor: "#98bcdf",
    textAlign: "-webkit-center",
    padding: "4px 0px",
    fontFamily: "system-ui",
    fontSize: "14px",
  },
  bottomContent: {
    margin: "1px 0px 2px",
    backgroundColor: "#98bcdf",
    textAlign: "-webkit-center",
    padding: "4px 0px",
    fontFamily: "system-ui",
    fontSize: "14px",
  },
  circle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#fff9f9",
    textAlign: "center",
    color: "black",
    alignContent: "center",
    border: "solid",
    marginInline: "auto",
  },
}));

const CardComponent = (props) => {
  const classes = useStyles();
  const { heading, current, currentTitle, past, pastTitle, type, num } = props;
  return (
    <>
      <Paper className={classes.paperContainer}>
        <div className={classes.Title}>{heading}</div>
        {type === "Number" ? (
          <div className={classes.circle}>{num}</div>
        ) : (
          <>
            <div
              className={classes.content}
            >{`${currentTitle}: ${current}`}</div>
            <div
              className={classes.bottomContent}
            >{`${pastTitle}: ${past}`}</div>
          </>
        )}
      </Paper>
    </>
  );
};

export default CardComponent;
