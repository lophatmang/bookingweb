import classes from "./Info.module.css";
import object from "../../data/detail.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
  return (
    <div className={classes.info}>
      <div className="flex justify-between items-start mb-5">
        <div>
          <h1 className=" mb-3">{object.name}</h1>
          <p className=" mb-3">
            <FontAwesomeIcon
              className=" pr-2"
              icon="fa-solid fa-location-dot"
            />
            {object.address}
          </p>
          <p className=" mb-3">
            <span style={{ fontWeight: "bolder", color: "#60a5fa" }}>
              {object.distance}
            </span>
          </p>
          <span style={{ color: "#16a34a" }}>{object.price}</span>
        </div>
        <button>Reserve or Book Now</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {object.photos.map((e, i) => (
          <img key={i} src={e} alt="" />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <div>
          <h1 className=" mb-3">{object.title}</h1>
          <p>{object.description}</p>
        </div>
        <div className={classes.description}>
          <h1>Perfect for a 9-night stay!</h1>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.81
          </p>
          <p className=" text-2xl">
            <strong>${object.nine_night_price}</strong>
            (9 nights)
          </p>
          <button>Reserve or Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
