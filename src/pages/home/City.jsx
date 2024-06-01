import object from "../../data/city.json";
import classes from "./City.module.css";

function City() {
  return (
    <div className={classes.city}>
      {object.map((e, i) => (
        <div key={i}>
          <img src={e.image} alt="" />
          <h1>{e.name}</h1>
          <p>{e.subText}</p>
        </div>
      ))}
    </div>
  );
}

export default City;
