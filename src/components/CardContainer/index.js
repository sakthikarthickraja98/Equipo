import React from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles(() => ({
  paperContainer: {
    borderTopWidth: "thick",
    borderBottomWidth: "thin",
    borderRightWidth: "thin",
    borderLeftWidth: "thin",
    borderColor: (props) => `${props.color}`,
    borderStyle: "solid",
    padding: "8px",
    flex: "1",
  },
  content: {
    padding: "8px 0px",
  },
  title: {
    fontSize: "14px",
    fontFamily: "system-ui",
    fontWeight: 600,
  },
  text: {
    fontSize: "14px",
    fontFamily: "system-ui",
  },
}));

const CardContainer = (props) => {
  const { color, data } = props;
  const classes = useStyles(props);

  return (
    <>
      <Paper className={classes.paperContainer}>
        {data?.map((item, index) => {
          return (
            <div className={classes.content} key={index}>
              <div className={classes.title}>{item.title}:</div>
              <div className={classes.text}>{item.content}</div>
            </div>
          );
        })}
      </Paper>
    </>
  );
};

export default CardContainer;
