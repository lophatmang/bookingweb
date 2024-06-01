import object from "../../data/type.json";
import classes from "./City.module.css";

function Hotel() {
  return (
    <div className={classes.hotel}>
      <h1>Browse by property type</h1>
      <div className="flex gap-5">
        {object.map((e, i) => (
          <div key={i}>
            <img src={e.image} alt="" />
            <h1>{e.name}</h1>
            <p className=" text-gray-400">{e.count} Hotels</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotel;
