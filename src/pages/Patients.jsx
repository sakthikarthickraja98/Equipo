import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import CardContainer from "../components/CardContainer";
import PlaceIcon from "@mui/icons-material/Place";
import MaleIcon from "@mui/icons-material/Male";
import PublicIcon from "@mui/icons-material/Public";
import WorkIcon from "@mui/icons-material/Work";
import BadgeIcon from "@mui/icons-material/Badge";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdCall } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    margin: "86px 16px 16px 65px",
  },
  papper: {
    padding: "12px 20px",
    textAlign: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
  },
  profileDetails: {
    padding: "12px",
  },
  profileTable: {
    padding: "12px",
  },
  BasicDetails: {
    padding: "12px",
    "& .css-17o22dy-MuiAvatar-root": {
      width: "70px",
      height: "70px",
    },
  },
  BasicView: {
    padding: "12px",
    display: "flex",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "4px",
    fontFamily: "system-ui",
    fontSize: "14px",
  },
  item: {
    margin: "2px 4px",
    "& .MuiSvgIcon-root": {
      fontSize: "10px",
      marginRight: "2px",
    },
  },
  activityContainer: {
    display: "flex",
    flexDirection: "row",
    placeContent: "space-between !important",
  },
  header: {
    display: "flex",
    backgroundColor: "rgb(25, 118, 210)",
    padding: "4px 8px",
  },
  activityPaper: {
    minHeight: "85%",
  },
  paperContent: {
    display: "flex",
    flex: "1",
  },
  title: {
    fontFamily: "system-ui",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },
  content: {
    fontFamily: "system-ui",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  ListContent: {
    display: "flex",
  },
  name: {
    fontFamily: "system-ui",
    fontSize: "20px",
    padding: "2px 0px",
    color: "rgb(25, 118, 210)",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  screenHeader: {
    padding: "4px",
    fontFamily: "system-ui",
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

const primary = [
  { title: `Primary Physician`, content: `TEST ONLY` },
  { title: `Primary Location`, content: `EBS Demo Facility - 35` },
  { title: `Referred by`, content: `Not provided` },
];

const condition = [
  {
    title: `Condition`,
    content: `Heart Failure, Hypertension, ischemic, Heart Disease`,
  },
  { title: `Habits`, content: `Smoking` },
  {
    title: `Vitals`,
    content: `BMI: NA, Systolic/Diastolic: 127/84, Glucose: NA, )2 Saturation: NA`,
  },
];

const allergy = [
  { title: `Allergy`, content: `Env (Fungicide), Food (Egg), Food (Tree Nut)` },
  { title: `Medication`, content: `EBS Demo Facility - 35` },
  { title: `Immunization`, content: `1122 (dtp)` },
];

const programs = [
  {
    title: `Programs`,
    content: `Remote Monitoring, Disease Management Program, CCm, AWV...`,
  },
  { title: `Service Category`, content: `High Acuity, Straight Medicare` },
  {
    title: `Measures`,
    content: `Adult Access to Preentive/Ambulatory Health Services ALL, Adult BMI Assessment, Controlling High Blood Pressure with 18-59 years of age`,
  },
];

const Patients = () => {
  const classes = useStyles();

  const ListContent = ({ text }) => {
    return (
      <>
        <div className={classes.item}>
          <FiberManualRecordIcon className={classes.dot} />
          {text}
        </div>
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1 }} className={classes.boxContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <Grid container className={classes.profileContainer}>
                <Grid item xs={12} container className={classes.profileDetails}>
                  <Grid item xs={3} sm={2} className={classes.BasicDetails}>
                    <Avatar src="/broken-image.jpg" size={500} />
                  </Grid>
                  <Grid item xs={9} sm={5} className={classes.BasicDetails}>
                    <div>
                      <span className={classes.name}>
                        Pette Park
                        <span
                          style={{
                            color: "#d78f0b",
                            display: "flex",
                            marginLeft: "4px",
                          }}
                        >
                          <BiSolidMessageSquareEdit />
                        </span>
                      </span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>
                        <MaleIcon fontSize="small" />
                        Male DOB:
                      </span>
                      &nbsp;
                      <span className={classes.content}>
                        01-Jan-1998 (42 Yrs)
                      </span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>
                        <PublicIcon fontSize="small" />
                        Ethnicity:
                      </span>
                      &nbsp;
                      <span className={classes.content}>
                        Caucasian (European)
                      </span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>
                        <WorkIcon fontSize="small" />
                        Occupation:{" "}
                      </span>
                      &nbsp;
                      <span className={classes.content}>Management</span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>
                        <BadgeIcon fontSize="small" />
                        Account #:{" "}
                      </span>
                      &nbsp;
                      <span className={classes.content}>14233254343</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={5} className={classes.BasicDetails}>
                    <div>
                      <span className={classes.content}>
                        <PlaceIcon />
                        No details provided
                      </span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>Primary: </span>&nbsp;
                      <span className={classes.content}>
                        +91 4323416723
                        <span
                          style={{
                            color: "#d78f0b",
                            display: "flex",
                            marginLeft: "4px",
                          }}
                        >
                          <MdCall />
                        </span>
                      </span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>Emergency: </span>&nbsp;
                      <span className={classes.content}>+1233445</span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>Policy Number: </span>
                      &nbsp;
                      <span className={classes.content}>909090</span>
                    </div>
                    <div className={classes.ListContent}>
                      <span className={classes.title}>Insurer:</span>&nbsp;
                      <span className={classes.content}>Medicare</span>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} container className={classes.profileTable}>
                  <Grid
                    item
                    xs={7}
                    container
                    spacing={2}
                    className={classes.BasicDetails}
                  >
                    <Grid item xs={4} style={{ display: "flex" }}>
                      <Card
                        heading={"Risk"}
                        current={"N/A"}
                        currentTitle={"This Year"}
                        past={"N/A"}
                        pastTitle={"Last Year"}
                      />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex" }}>
                      <Card heading={"Care Gaps"} type={"Number"} num={3} />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex" }}>
                      <Card
                        heading={"ASCVD"}
                        current={"2.70"}
                        currentTitle={"Current Risk"}
                        past={"0.20"}
                        pastTitle={"Lowest Risk"}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={5} className={classes.BasicView}>
                    <Paper style={{ flex: 1 }}>
                      <h5 className={classes.screenHeader}>Screenings</h5>
                      <div className={classes.container}>
                        <ListContent text={"DM"} />
                        <ListContent text={"BP"} />
                        <ListContent text={"Depression"} />
                        <ListContent text={"Colorectal"} />
                        <ListContent text={"Breast Cancer"} />
                        <ListContent text={"Fall Risk"} />
                        <ListContent text={"Tobacco"} />
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            xs={12}
            md={4}
            className={classes.activityContainer}
          >
            <Grid item xs={6} md={12}>
              <Paper className={classes.activityPaper}>
                <div className={classes.header}>
                  <span style={{ color: "#ffffff" }}>
                    <BusinessCenterIcon />
                  </span>
                  <span
                    style={{
                      marginLeft: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "system-ui",
                      alignContent: "center",
                    }}
                  >
                    Recent Activity:
                  </span>
                  <span style={{ marginLeft: "auto", color: "#ffffff" }}>
                    <AddCircleIcon />
                  </span>
                </div>
                <div
                  style={{
                    padding: "20px 8px",
                    fontSize: "14px",
                    fontFamily: "system-ui",
                  }}
                >
                  Follow Up
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6} md={12}>
              <Paper className={classes.activityPaper}>
                <div className={classes.header}>
                  <span style={{ color: "#ffffff" }}>
                    <NoteOutlinedIcon />
                  </span>
                  <span
                    style={{
                      marginLeft: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontFamily: "system-ui",
                      alignContent: "center",
                    }}
                  >
                    Latest Note:
                  </span>
                  <span style={{ marginLeft: "auto", color: "#ffffff" }}>
                    <AddCircleIcon />
                  </span>
                </div>
                <div
                  style={{
                    padding: "20px 8px",
                    fontSize: "14px",
                    fontFamily: "system-ui",
                  }}
                >
                  Notes
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={{ display: "flex" }}>
            <Paper className={classes.paperContent}>
              <CardContainer color={"blue"} data={primary} />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={{ display: "flex" }}>
            <Paper className={classes.paperContent}>
              <CardContainer color={"green"} data={condition} />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={{ display: "flex" }}>
            <Paper className={classes.paperContent}>
              <CardContainer color={"yellow"} data={allergy} />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={{ display: "flex" }}>
            <Paper className={classes.paperContent}>
              <CardContainer color={"red"} data={programs} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Patients;
