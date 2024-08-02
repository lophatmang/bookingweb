import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import object from "../../data/navBar.json";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={classes.head}>
        <h1 onClick={() => window.location.replace("/")}>Booking Website</h1>
        <div>
          <button className="p-3 m-2 text-blue-500">Regiseter</button>
          <button className="p-3 m-2 text-blue-500">Login</button>
        </div>
      </div>
      <div className={classes.footer}>
        {object.map((e, i) => (
          <a key={i} className={e.active === true && classes.active} href="#">
            <FontAwesomeIcon icon={e.icon} />
            <span>{e.type}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
