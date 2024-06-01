import object from "../../data/hotel_list.json";
import classes from "./City.module.css";

function ListHotel() {
  return (
    <div className={classes.list__hotel}>
      <h1>Homes guests love</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${object.length}, 1fr)`,
          gap: "20px",
        }}
      >
        {object.map((e, i) => (
          <div key={i}>
            <img src={e.image_url} alt="" />
            <a href="/detail">{e.name}</a>
            <p className=" text-gray-400 my-2">{e.city} </p>
            <p
              className="mb-2"
              style={{ fontWeight: "bolder", color: "black" }}
            >
              Starting from ${e.price}
            </p>
            <div style={{ display: "flex" }}>
              <span>{e.rate}</span>
              <p className="ml-2" style={{ fontSize: "20px" }}>
                {e.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListHotel;
