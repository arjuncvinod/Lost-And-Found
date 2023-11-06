export default function Itemcard(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src="https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
          alt=""
        />
      </div>
      <div className="card-desc">
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
