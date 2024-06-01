import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import object from "../../data/navBar.json";
import Navbar from "../home/Navbar";
import Registration from "../home/Registration";
import Footer from "../home/Footer";
import Info from "./Info";

import classes from "./Detail.module.css";

const Detail = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#003b95",
          marginBottom: "40px",
          color: "white",
        }}
      >
        <div className={classes.container}>
          <Navbar />
        </div>
      </div>
      {/* Detail */}
      <div className={classes.container}>
        <Info />
      </div>
      {/*  */}
      <div
        style={{
          backgroundColor: "#003b95",
          color: "white",
        }}
      >
        <Registration />
      </div>
      <div className={classes.container}>
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
