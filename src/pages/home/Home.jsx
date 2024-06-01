import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import object from "../../data/navBar.json";
import Navbar from "./Navbar";
import Header from "./Header";
import City from "./City";
import Hotel from "./Hotel";
import ListHotel from "./ListHotel";
import Registration from "./Registration";
import Footer from "./Footer";
import classes from "./Home.module.css";

const Home = () => {
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
          <Header />
        </div>
      </div>
      <div className={classes.container}>
        <City />
        <Hotel />
        <ListHotel />
      </div>
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

export default Home;
