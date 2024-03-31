import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import {
  BiAnalyse,
  BiSearch,
  BiSolidAmbulance,
  BiCog,
  BiSolidFirstAid,
} from "react-icons/bi";
import {
  AiFillHeart,
  AiTwotoneFileExclamation,
  AiFillDashboard,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { HiBuildingOffice } from "react-icons/hi2";
import { LuNewspaper } from "react-icons/lu";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  slideBar: {
    background: "rgb(0, 7, 61)",
    color: "white",
    height: "100vh",
    overflowY: "auto",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    position: "fixed",
    zIndex: 1200,
  },
}));

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiFillDashboard />,
  },
  {
    path: "/",
    name: "Patients",
    icon: <FaUser />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUsers />,
  },
  {
    path: "/protection",
    name: "Protection",
    icon: <FaShieldAlt />,
  },
  {
    path: "/ambulance",
    name: "Ambulance",
    icon: <BiSolidAmbulance />,
  },
  {
    path: "/first-aid",
    name: "First-aid",
    icon: <FaSuitcaseMedical />,
  },
  {
    path: "/record",
    name: "Records",
    icon: <FaClipboardList />,
  },
  {
    path: "/building",
    name: "Building",
    icon: <HiBuildingOffice />,
  },
  {
    path: "/New",
    name: "News",
    icon: <LuNewspaper />,
  },
  {
    path: "/temperature",
    name: "Temperature",
    icon: <LiaTemperatureHighSolid />,
  },
  {
    path: "/medicine",
    name: "Medicine",
    icon: <PiSuitcaseSimpleFill />,
  },
  {
    path: "/doctors",
    name: "Doctors",
    icon: <FaUserDoctor />,
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: <RiContactsBookFill />,
  },
];

const SideBar = ({ children }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "52px",
            backgroundColor: "#1976d2",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={classes.slideBar}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Equipo
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main style={{ padding: "0px", width: "100%" }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
