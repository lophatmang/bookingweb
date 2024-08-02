import Navbar from "../home/Navbar";
import Registration from "../home/Registration";
import Footer from "../home/Footer";
import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";
import classes from "./Search.module.css";

const Search = () => {
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
      {/* Search */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gap: "20px",
          alignItems: "start",
        }}
        className={classes.container}
      >
        <SearchPopup />
        <SearchList />
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

export default Search;
