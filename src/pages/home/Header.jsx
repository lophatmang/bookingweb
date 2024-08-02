import classes from "./Header.module.css";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarComponent from "./CalendarComponent";

function Header() {
  const [times, setTimes] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showCale, setShowCale] = useState(false);
  return (
    <div className={classes.header}>
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <div className={classes.login}>
        <a href="#" className="pr-2">
          Sign in
        </a>
        /
        <a href="#" className="pl-2">
          Regiseter
        </a>
      </div>
      <div className={classes.block}>
        <form>
          <div>
            <FontAwesomeIcon icon="fa fa-bed" />
            <input
              type="text"
              className="pl-2"
              placeholder="Where are you going?"
            />
          </div>
          <div>
            <FontAwesomeIcon icon="fa fa-calendar" />
            <input
              className="pl-2"
              value={`${format(times[0].startDate, "dd/mm/yyyy")} to ${format(
                times[0].endDate,
                "dd/mm/yyyy"
              )}`}
              readOnly
              onClick={() => setShowCale(!showCale)}
            />
          </div>
          <div>
            <FontAwesomeIcon icon="	fa fa-male" />
            <input
              type="text"
              className="pl-2"
              placeholder="1 adult • 0 children • 1 room"
            />
          </div>

          <button
            type="button"
            onClick={() => window.location.replace("/search")}
          >
            Search
          </button>
        </form>
        <div
          style={{
            width: "340px",
            margin: "0 30%",
            position: "absolute",
          }}
        >
          <CalendarComponent
            times={times}
            setTimes={setTimes}
            showCale={showCale}
            setShowCale={setShowCale}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
