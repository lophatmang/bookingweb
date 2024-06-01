import classes from "./SearchListItem.module.css";

function SearchListItem(props) {
  const data = props.object;
  return (
    <div className={classes.search__list}>
      <img src={data.image_url} alt="" />
      <div style={{}}>
        <h1>{data.name}</h1>
        <p>{data.distance} from center</p>
        <span>{data.tag}</span>
        <p style={{ fontWeight: "bolder", marginTop: "10px" }}>
          {data.description}
        </p>
        <p>{data.type}</p>
        <div
          style={{ color: "#008234" }}
          className={data.free_cancel ? "" : classes.hide}
        >
          <strong>Free cancellation</strong>
          <p>You can cancel later, so lock in this great price today!</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="flex justify-between">
          <h1 style={{ color: "black" }}>{data.rate_text}</h1>
          <span
            style={{
              color: "white",
              backgroundColor: "#003580",
              padding: "5px",
              borderRadius: "0",
            }}
          >
            {data.rate}
          </span>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
            ${data.price}
          </p>
          <p className=" text-gray-400">Includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchListItem;
